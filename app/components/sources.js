import React from 'react';
import * as NewsAPI from '../utils/NewsAPI';
import SourceStore from '../stores/SourceStore';
import SourceItem from './source-items';
import NewsStore from '../stores/NewsStore';
import NewsActions from '../actions/NewsActions';
import SortItem from '../components/sort-items';

import Articles from '../components/articles';

export default class Source extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            sources: SourceStore.getAll(), 
            sourceId: props.id,
            sortBysAvailable: []
        };
        this._onLoad = this._onLoad.bind(this);
        this._onChange = this._onChange.bind(this);
        this.onSort = this.onSort(this);
        this.OnFilterChange = this.OnFilterChange.bind(this);
        this.sortBy = undefined;
        this.defaultId = 'cnn';
        

    }
    componentWillMount() {
        NewsAPI.getNewsSources();
    }

    componentDidMount() {
        SourceStore.addChangeListener(this._onLoad);
        NewsAPI.getNewsArticle(this.defaultId, this.sortBy);
    }

    componentWillUnmount() {
        SourceStore.removeChangeListener(this._onLoad);
    }
    //sets the state to the current store state having all sources
    _onLoad() {
        console.log(SourceStore.getAll(), "yuuuu")
        this.setState({sources: SourceStore.getAll()});
    }

    _onChange(event) {
        let sources = this.state.sources[0];
        let prop = 0;
        for (; prop < sources.length; prop++) {
            if (sources[prop].id === event.target.value) {
                console.log(sources[prop].id,"=====sources prop")
                this.sourceId = sources[prop].id;

                this.setState({sortBysAvailable: sources[prop].sortBysAvailable})
                
                // this.sortBysAvailable = sources[prop].sortBysAvailable;
                console.log(this.sortBysAvailable, "propppppppp")
                NewsAPI.getNewsArticle(this.sourceId, this.sortBysAvailable)
                console.log("what do you return******", this.sortBysAvailable)
            }
        }

    }

    onSort(event){
        console.log(this.state.sortBysAvailable, 'available')
        // switch(this.sortBysAvailable){
        //     case top:
        //     if (event.target.value === 'top'){
        //         NewsAPI.getNewsArticle(this.sourceId, this.sortBysAvailable["top"])
        //     }
        //     break;
        //     case latest:
        //     if (event.target.value === 'latest'){
        //         NewsAPI.getNewsArticle(this.sourceId, this.sortBysAvailable[latest])
        //     }
        //     case popular:
        //     if (event.target.value === 'popular'){
        //         NewsAPI.getNewsArticle(this.sourceId, this.sortBysAvailable[popular])
        //     }
        //     break;
        //     default:
        //         NewsAPI.getNewsArticle(this.sourceId, this.sortBysAvailable["top"])
        // }
    }    

    OnFilterChange(event) {
        const allSources = SourceStore.getAll();
        console.log('Got here!');
        if (!event.target.value) {
            this.setState({
                sources: allSources
            });
        } else {
            const filterBy = event.target.value.toString().toLowerCase();
            const searchWords = allSources[0].length;
            const filteredList = []

            for(var index=0; index < searchWords; index++) {
                let value = allSources[0][index].name; 
                if ((new RegExp(filterBy)).test(value.toLowerCase())){
                    filteredList.push(allSources[0][index]);
                    this.setState({
                        sources: [filteredList]
                    })
                }
                    
            }
        }
    }

    render() {
        let rows = [];
        let change = this._onChange;
        if (this.state.sources[0]) {
            this.state.sources[0].map(function (item, index) {
                rows.push(<SourceItem key={index} value={item.id} name={item.name}
                    onclick={change} />)
            });
        }

        return (
            <div className="col-lg-12">
                <div id="sidebar" className="col-lg-2 list-group">
                    <h3>Please select News Source </h3>
                    <input type="text" className="form-control" name="x" placeholder="Search News...." onChange={this.OnFilterChange.bind(this)} />
                  <div
                    defaultValue={this.defaultId}
                    onChange={this._onChange}
                    onLoad={this._onLoad}>
                    <a href="#" className="list-group-item">{rows}</a>
                </div>       
                </div> 
                <div  className="col-lg-10">        
                <Articles sortParams={this.state.sortBysAvailable} />
                </div>
            </div>
        );
    }
}

