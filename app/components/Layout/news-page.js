import React from 'react';
import NewsStore from '../../stores/NewsStore';
import NewsActions from '../../actions/NewsActions';
import ArticleItem from './article-items.js'
import NewsAPI from "../../utils/NewsAPI";

export default class NewsPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {articles: NewsStore.getAll()};
        this._onChange = this._onChange.bind(this)
    }

    _onChange (){
        this.setState(NewsStore.getAll());
     }
  
    componentWillMount (){
        NewsStore.addChangeListener(this._onChange);
    }

    componentWillUnmount (){
        NewsStore.removeChangeListener(this._onChange);
    }

    shouldComponentUpdate (nextProps, nextState){
        // console.log(nextProps, nextState);
        this.setState({articles : NewsStore.getAll()});
        return true;
    }

    render (){
        let news = this.state.articles[0];
        let rows = [];

        if(news) {
            news.map(function(item, index) {
                rows.push(<ArticleItem key={index} index={index} item={item}/>);
            });
        }

        return (
            <div className="col-lg-12">
                <div style={{display :'inline-block', width:'100%'}}>
                    {rows}
                </div>
            </div>
      );
    }

};