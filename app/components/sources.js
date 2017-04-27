import React from 'react';
import * as NewsAPI from '../utils/NewsAPI';
import SourceStore from '../stores/SourceStore';
import SourceItem from './source-items';
import NewsStore from '../stores/NewsStore';
import NewsActions from '../actions/NewsActions';

export default class Source extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sources: SourceStore.getAll() };
        this._onLoad = this._onLoad.bind(this);
        this._onChange = this._onChange.bind(this);
        this.OnFilterChange = this.OnFilterChange.bind(this);
        this.sortBy = undefined;
        this.defaultId = 'cnn';
    }
    //sets the state to the current store state having all sources
    _onLoad() {
        this.setState(SourceStore.getAll());
    }

    _onChange(event) {
        let sources = this.state.sources[0];
        let prop = 0;
        for (; prop < sources.length; prop++) {
            //checks if the target value selected is same as the source id from the API
            if (sources[prop].id === event.target.value) {
                this.sourceId = sources[prop].id;
                this.sortBysAvailable = sources[prop].sortBysAvailable;
                if (this.sortBysAvailable.length > 0) {
                    this.sortBysAvailable = this.sortBysAvailable[
                        Math.floor(Math.random() * this.sortBysAvailable.length)]
                } else {
                    this.sortBysAvailable = undefined
                }
                NewsAPI.getNewsArticle(this.sourceId, this.sortBysAvailable)
            }
        }

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
        );
    }
}

