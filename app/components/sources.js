import React from 'react';
import SourceStore from '../stores/SourceStore';
import SourceItem from './source-items';
import NewsStore from '../stores/NewsStore';
import NewsActions from '../actions/NewsActions';
import Articles from '../components/articles';

/**
 * Main component to display both sources and articles
 * @extends React.Component
 */
export default class Sources extends React.Component {
/** @constructor */
    constructor(props) {
        super(props);
        this.state = {
            sources: [],
            sortBysAvailable: []
        };

        this._onLoad = this._onLoad.bind(this);
        this._onChange = this._onChange.bind(this);
        this.OnFilterChange = this.OnFilterChange.bind(this);

        this.defaultId = 'cnn';
    }

    componentDidMount() {
        NewsActions.getNewsSources();
        SourceStore.addChangeListener(this._onLoad);
        NewsActions.getNewsArticles(this.defaultId, this.sortBy);
    }

    componentWillUnmount() {
        SourceStore.removeChangeListener(this._onLoad);
    }

/**
 * @function
 * @returns {object} state
 * @description update state
 * */
    _onLoad() {
        this.setState({ sources: SourceStore.getAll() });
    }

    _onChange(sourceId, sortBysAvailable) {
        NewsActions.getNewsArticles(sourceId, sortBysAvailable)
    }

/**
 * @param {String} onFilterhange
 * @returns [Array]
 */
    OnFilterChange(event) {
        const allSources = SourceStore.getAll()[0];
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

/**
 * Renders {jsx}
 */
    render() {
        let allSources = this.state.sources[0];
        return (
            <div className="col-lg-12">
                <div id="sidebar-wrapper" className="col-lg-2 list-group">
                    <h5>Please select News Source </h5>
                    <input type="text" className="form-control" placeholder="Search News...."
                         onChange={this.OnFilterChange} />
                    <div>
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


