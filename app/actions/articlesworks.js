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
        this._onChange = this._onChange.bind(this);

    }

    _onChange() {
        console.log("onchange")
        this.setState(NewsStore.getAll());
        
    }

    componentWillMount() {
        NewsStore.addChangeListener(this._onChange);

    }

    componentWillUnmount() {
        NewsStore.removeChangeListener(this._onChange);
    }

    shouldComponentUpdate(nextProps, nextState) {
    
        this.setState({ articles: NewsStore.getAll() });
        return true;
    }
onSort(event) {
        console.log("getting here");
        // let sources = this.state.sources[0];
        // let prop = 0;
        // for (; prop < sources.length; prop++) {
        //     if (sources[prop].sortBysAvailable === event.target.value) {
        //         this.setState({ sortBysAvailable: sources[prop].sortBysAvailable })
        //         this.sortBysAvailable = sources[prop].sortBysAvailable;
        //         NewsAPI.getSort(this.sortBysAvailable)
        //     }
        // }
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
            this.state.sortBysAvailable.map(function (item, index) {
                sortBysAvailable.push(<SortItem key={index} value={item} name={item}/>)
            })
        }

        return (
            <div>
             <select 
                className="col-lg-3"
                //defaultValue={this.props.sortParams}
                onChange={(event) => this.props.onSort(event)}
                onClick={(event) => this.props.onSort(event)}>
                {this.props.sortParams.map( param => <option>{param}</option>)}
                </select>
              
                <div style={{ display: 'inline-block', width: '100%' }}>
                    {rows}
                </div>
            </div>
        );
    }

};
