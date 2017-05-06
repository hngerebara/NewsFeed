import React from 'react';
import * as NewsAPI from '../utils/NewsAPI';
import SourceStore from '../stores/SourceStore';
import SourceItem from './source-items';
import NewsStore from '../stores/NewsStore';
import NewsActions from '../actions/NewsActions';
import Articles from '../components/articles';

export default class Sources extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sources: SourceStore.getAll(),
            sortBysAvailable: []
        };
        this._onLoad = this._onLoad.bind(this);
        this._onChange = this._onChange.bind(this);
        this.OnFilterChange = this.OnFilterChange.bind(this);
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
    
    _onLoad() {
        this.setState({ sources: SourceStore.getAll() });
    }

    _onChange(sourceId, sortBysAvailable) {
        NewsAPI.getNewsArticle(sourceId, sortBysAvailable)
    }

    OnFilterChange(event) {
        const allSources = SourceStore.getAll()[0];
        const filterBy = event.target.value.toString().toLowerCase();
        const filteredList = [];
         console.log(allSources,"all sources")
         console.log(event.target.value,"value")
        if (!event.target.value) {
            this.setState({
                sources: allSources
            });
        } else {
            for (var index = 0; index < allSources.length; index++) {
                let value = allSources[index].name;
                if ((new RegExp(filterBy)).test(value.toLowerCase())) {
                    filteredList.push(allSources[index]);
                    console.log(filteredList,"filetrred list")
                    this.setState({
                        sources: [filteredList]
                    })
                }
            }
        }
    

    }
    render() {
        let allSources = this.state.sources[0];
        return (
            <div className="col-lg-12">
                <div id="sidebar-wrapper" className="col-lg-2 list-group">
                    <h5>Please select News Source </h5>
                    <input type="text" className="form-control" placeholder="Search News...."
                         onChange={this.OnFilterChange} />
                    <div onLoad={this._onLoad}>
                        { allSources && allSources.map((item, index) => <SourceItem key={index} value={item.id} name={item.name}
                          onclick={() => this._onChange(item.id, item.sortBysAvailable)} />)
                        }
                    </div>
                </div>
                <div className="col-lg-10">
                    <Articles source={this.state.sourceId} sortParams={this.state.sortBysAvailable} />
                </div>
            </div>
        );
    }
}


