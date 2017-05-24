import React from 'react';
import SourceStore from '../stores/SourceStore';
import SourceItem from './SourceItem';
import NewsActions from '../actions/NewsActions';
import Articles from '../components/Articles';

/**
 * Main component to display both sources and articles
 * @extends React.Component
 */
export default class Sources extends React.Component {
  /**
   * Creates an instance of Sources.
   * @param {any} props
   * @memberOf Sources
   */
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
      sortBysAvailable: ['top'],
      sourceName: 'CNN',
      sourceId: 'cnn'
    };

    this.onLoad = this
      .onLoad
      .bind(this);
    this.onChange = this
      .onChange
      .bind(this);
    this.OnFilterChange = this
      .OnFilterChange
      .bind(this);

    this.defaultId = 'CNN';
  }

  /**
   * @description claled to ensure sources is properly loaded
   * @memberOf Sources
   * @returns {undefined} no return value
   */
  componentDidMount() {
    NewsActions.getNewsSources();
    SourceStore.addChangeListener(this.onLoad);
    NewsActions.getNewsArticles(this.defaultId, this.sortBy);
  }

  /**
   * @memberOf Sources
   * @returns {null} null
   */
  componentWillUnmount() {
    SourceStore.removeChangeListener(this.onLoad);
  }

  /**
  * @function
  * @returns {object} state
  * @description update state
  * @memberOf Sources
  **/
  onLoad() {
    this.setState({
      sources: SourceStore.getAll()
    });
  }

  /**
   * @param {any} sourceId
   * @param {any} sortBysAvailable
   * @param {any} sourceName
   * @memberOf Sources
   * @returns {undefined} no return value
   */
  onChange(sourceId, sortBysAvailable, sourceName) {
    this.setState({ sourceId, sourceName, sortBysAvailable });
    NewsActions.getNewsArticles(sourceId, sortBysAvailable);
  }

  /**
   * @memberOf Sources
   * @param {any} event
   * @returns {undefined} no return value
   */
  OnFilterChange(event) {
    const allSources = this.state.sources[0];
    const filterBy = event
      .target
      .value
      .toString()
      .toLowerCase();
    const filteredList = [];

    if (!event.target.value) {
      this.setState({ sources: allSources });
    } else {
      for (let index = 0; index < allSources.length; index += 1) {
        const value = allSources[index].name;
        if (new RegExp(filterBy).test(value.toLowerCase())) {
          filteredList.push(allSources[index]);
          this.setState({ sources: [filteredList] });
        }
      }
    }
  }

 /**
   * @description renders the react component
   * @memberof Sources
   * @returns {*} returns element
   */
  render() {
    const allSources = this.state.sources[0];
    return (
      <div className="col-lg-12">
        <div id="idebar-wrapper" className="col-lg-2 list-group">
          <h5>Please select News Source</h5>
          <input
            type="text"
            className="form-control"
            placeholder="Search News...."
            onChange={this.OnFilterChange}
          />
          <div className="source-list">
            {allSources && allSources.map(item => (<SourceItem
              key={item.id}
              value={item.id}
              name={item.name}
              onclick={() => this.onChange(item.id,
                item.sortBysAvailable, item.name)}
            />))}
          </div>
        </div>
        <div className="col-lg-10">
          <Articles
            sourceId={this.state.sourceId}
            sourceName={this.state.sourceName}
            sortParams={this.state.sortBysAvailable}
          />
        </div>
      </div>
    );
  }
}
