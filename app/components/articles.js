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
        console.log(this.state,"proplsssssss");

    }

    componentWillUnmount() {
        NewsStore.removeChangeListener(this._onChange);
    }

    shouldComponentUpdate(nextProps, nextState) {
    
        this.setState({ articles: NewsStore.getAll() });
        console.log("hgghghgh",this.setState())
        return true;
    }

    sortArticles(e) {
        return 'bla'
    }

    render() {
        console.log(this.props.sortParams,"sortParams");
        let news = this.state.articles[0];
        let rows = [];
        if (news) {
            news.map(function (item, index) {
                rows.push(<ArticleItem key={index} index={index} item={item} />);
            });
        }
        if(this.state.sortBysAvailable){
            this.state.sortBysAvailable.map(function (item, index) {
                sortBysAvailable.push(<SortItem key={index} value={item} name={item}/>)
            })
        }

        return (
            <div>
             <select 
                className="col-lg-3"
                defaultValue={this.props.sortParams}
                onChange={this.props._OnChange}
                onClick={this.props.onSort}>
                {this.props.sortParams.map( param => <option>{param}</option>)}
                </select>
              
                <div style={{ display: 'inline-block', width: '100%' }}>
                    {rows}
                </div>
            </div>
        );
    }

};
