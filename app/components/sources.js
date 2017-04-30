import React from 'react';
import * as NewsAPI from '../utils/NewsAPI';
import SourceStore from '../stores/SourceStore';
import SourceItem from './source-items';
import NewsStore from '../stores/NewsStore';
import NewsActions from '../actions/NewsActions';
import SortItem from '../components/sort-items';

import Articles from '../components/articles';

export default class Sources extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sources: SourceStore.getAll(),
            sourceId: props.id,
            sortBysAvailable: []
        };
        this._onLoad = this._onLoad.bind(this);
        this._onChange = this._onChange.bind(this);
        //this.onSort = this.onSort(this);
        this.OnFilterChange = this.OnFilterChange.bind(this);
        //this.sortBy = undefined;
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
        this.setState({ sources: SourceStore.getAll() });
    }

    _onChange(event) {
        let sources = this.state.sources[0];
        console.log("this is valable",this.state.sources[0].body)
        let prop = 0;
        for (; prop < sources.length; prop++) {
            if (sources[prop].id === event.target.value) {
                this.sourceId = sources[prop].id; 
                this.setState({ sortBysAvailable: sources[prop].sortBysAvailable })
                this.sortBysAvailable = sources[prop].sortBysAvailable;
                NewsAPI.getNewsArticle(this.sourceId, this.sortBysAvailable)
            }
        }

    }

    


    OnFilterChange(event) {
        const allSources = this.state.sources[0];
        const filterBy = event.target.value.toString().toLowerCase();
        const filteredList = [];
        if (!event.target.value) {
            this.setState({
                sources: allSources
            });
        } else {
            for (var index = 0; index < allSources.length; index++) {
                let value = allSources[index].name;
                if ((new RegExp(filterBy)).test(value.toLowerCase())) {
                    filteredList.push(allSources[index]);
                    this.setState({
                        sources: [filteredList]
                    })
                }
            }
        }

    }

    render() {
        let allSources = this.state.sources[0];
        let rows = [];
        let change = this._onChange;
        if (allSources) {
            allSources.map((item, index) => {
                rows.push(<SourceItem key={index} value={item.id} name={item.name}
                    onclick={change} />)
            });
        }

        return (
            <div className="col-lg-12">
                <div id="sidebar" className="col-lg-2 list-group">
                    <h3>Please select News Source </h3>
                    <input type="text" className="form-control" name="x" placeholder="Search News...."
                         onChange={this.OnFilterChange.bind(this)} />
                    <div
                        onChange={this._onChange}
                        onLoad={this._onLoad}>
                        <a href="#" className="list-group-item">{rows}</a>
                    </div>
                </div>
                <div className="col-lg-10">
                    <Articles sortParams={this.state.sortBysAvailable} />
                </div>
            </div>
        );
    }
}


