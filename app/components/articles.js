import React from 'react';
import ArticleItem from './article-items.js';
import NewsStore from '../stores/NewsStore';
import NewsActions from '../actions/NewsActions';
import NewsAPI from '../utils/NewsAPI';

export default class Articles extends React.Component {

    constructor(props) {
        super(props);
        this.state = { articles: NewsStore.getAll() };
        this._onChange = this._onChange.bind(this);
    }

    _onChange() {
        this.setState(NewsStore.getAll());
    }

    componentWillMount() {
        NewsStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        NewsStore.removeChangeListener(this._onChange);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("what do you do?")
        this.setState({ articles: NewsStore.getAll() });
        return true;
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
            <div className="col-lg-10">
                <select className="pull-right">
                    <option defaultValue={this.props.sortBy} onChange={this._sortByOnChange}> {this.props.sortBys}</option>
                </select>
                <div style={{ display: 'inline-block', width: '100%' }}>
                    {rows}
                </div>
            </div>
        );
    }

};
