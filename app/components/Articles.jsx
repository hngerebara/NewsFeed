import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import ArticleItem from './ArticleItems';
import NewsStore from '../stores/NewsStore';
import NewsActions from '../actions/NewsActions';

/**
 * Parent component for articles
 * @extends React.Component
 */
export default class Articles extends React.Component {

  /**
   * Creates an instance of Articles.
   * @param {any} props
   * @memberOf Articles
   */
  constructor(props) {
    super(props);
    this.state = {
      articles: NewsStore.getAll()
    };

    this.loadArticles = this.loadArticles.bind(this);
    this.onSort = this.onSort.bind(this);
  }

  /**
   * @memberOf Articles
   */
  componentWillMount() {
    NewsStore.addChangeListener(this.loadArticles);
  }


  /**
   * @memberOf Articles
   */
  componentWillUnmount() {
    NewsStore.removeChangeListener(this.loadArticles);
  }

   /**
   * @param {any} event
   * @memberOf Articles
   */
  onSort(event) {
    event.preventDefault();
    const source = this.props.sourceId;
    const value = event.target.value;
    NewsActions.getNewsArticles(source, value);
  }

  /**
   * @memberOf Articles
   */
  loadArticles() {
    this.setState({
      articles: NewsStore.getAll()
    });
  }



  /**
   * @returns JSX
   * @memberOf Articles
   */
  render() {
    const news = this.state.articles[0];
    return (
      <div>
        <label htmlFor="sortBy">Sort By</label>
        <select className="col-lg-3" onChange={this.onSort}>
          {this.props.sortParams.map((param, index) => (
            <option key={index} value={param}>{param}</option>
          ))}
        </select>

        <div
          style={{
            display: 'inline-block',
            width: '100%'
          }}
        >
          <label htmlFor="sourcename">{this.props.sourceName}</label>
          {
            news && news.map(item => <ArticleItem key={shortid.generate()} item={item} />)
          }
        </div>
      </div>
    );
  }
}

Articles.propTypes = {
  sourceId: PropTypes.string.isRequired,
  sortParams: PropTypes.arrayOf(PropTypes.string).isRequired,
  sourceName: PropTypes.string.isRequired
};
