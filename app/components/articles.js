import React from 'react';
import ArticleItem from './article-items.js';
import NewsStore from '../stores/NewsStore';
import NewsActions from '../actions/NewsActions';
import NewsAPI from '../utils/NewsAPI';

export default class Articles extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.sortParams,"params")
        console.log("porp",props)
        this.state = { articles: NewsStore.getAll() };
        this.articlesLoad = this.articlesLoad.bind(this);

    }

    articlesLoad() {
        this.setState(NewsStore.getAll());
    }

    componentWillMount() {
        NewsStore.addChangeListener(this.articlesLoad);

    }

    componentWillUnmount() {
        NewsStore.removeChangeListener(this.articlesLoad);
    }

    shouldComponentUpdate(nextProps, nextState) {
    
        this.setState({ articles: NewsStore.getAll() });
        return true;
    }
    onSort(event) {
        console.log("getting here");
        let sources = this.state.sources[0];
        let prop = 0;
        for (; prop < sources.length; prop++) {
            if (sources[prop].sortBysAvailable === event.target.value) {
                this.setState({ sortBysAvailable: sources[prop].sortBysAvailable })
                this.sortBysAvailable = sources[prop].sortBysAvailable;
                NewsAPI.getSort(this.sortBysAvailable)
            }
        }
    }


    render() {

        let news = this.state.articles[0];
        let rows = [];
        if (news) {
            news.map(function (item, index) {
                rows.push(<ArticleItem key={index} index={index} item={item} />);
            });
        }
        if(this.state.sortBysAvailable){
            this.state.sortBysAvailable.map(function (sortitem, sortindex) {
                sortBysAvailable.push(<SortItem key={sortindex} value={sorttem} name={sortitem} onSortChange={this.onSort.bind}/>)
            })
        }

        return (
            <div>
             <select 
                className="col-lg-3">
                defaultValue={this.props.sortParams}
                onChange={(event) => this.props._onChange(event)}>
                {this.props.sortParams.map( param => <option>{param}</option>)}
                </select>
                <div style={{ display: 'inline-block', width: '100%' }}>
                    {rows}
                </div>
            </div>
        );
    }

};
