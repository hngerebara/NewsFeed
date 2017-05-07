import React from 'react';
import ArticleItem from './Article-Items.js';
import NewsStore from '../stores/NewsStore';
import SourceStore from '../stores/SourceStore';
import NewsActions from '../actions/NewsActions';

/**
 * Parent component for articles
 * @extends React.Component
 */
export default class Articles extends React.Component {
    /**
    * @constructor 
    */
    constructor(props) {
        super(props);
        this.state = {
            articles: NewsStore.getAll(),
        };

        this.loadArticles = this.loadArticles.bind(this);
    }

    loadArticles() {
       this.setState({ articles: NewsStore.getAll() });

    }

    componentWillMount() {
        NewsStore.addChangeListener(this.loadArticles);
    }

    componentWillUnmount() {
        NewsStore.removeChangeListener(this.loadArticles);
    }
/**
 * @param {String} onSort
 * @returns {Object}
 */
    onSort(event) {
        event.preventDefault();
        const source = this.props.source
        const value = event.target.value;
        NewsActions.getNewsArticles(source, value)
    }

    render() {
        let news = this.state.articles[0];
        let rows = [];

        if (news) {
            news.map(function (item, index) {
                rows.push(<ArticleItem key={index} index={index} item={item} />);
            });
        }

        return (
            <div>
                <select
                    className="col-lg-3"
                    onChange={this.onSort.bind(this)}>
                    {this.props.sortParams.map((param, index) => <option key={index} >{param}</option>)}
                </select>

                <div style={{ display: 'inline-block', width: '100%' }}>
                    {rows}
                </div>
            </div>
        );
    }
};
