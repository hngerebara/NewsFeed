import React from 'react';
import * as NewsAPI from "../../utils/NewsAPI";
import SourceStore from '../../stores/SourceStore';
import SourceItem from "./source-items";
import NewsStore from "../../stores/NewsStore";

export default class Options extends React.Component {
	constructor(props){
        super(props);
        this.state = {sources: SourceStore.getAll()};
        this._onLoad = this._onLoad.bind(this);
        this._onChange = this._onChange.bind(this);
        this.sortBy = undefined;
        this.defaultId = 'cnn';
	}
    _onLoad (){
        this.setState(SourceStore.getAll());
    }
    _onChange(event) {
        let sources = this.state.sources[0];
        let prop = 0;
        for (;prop < sources.length; prop++){
            if (sources[prop].id === event.target.value){
                this.sourceId = sources[prop].id;
                this.sortBysAvailable = sources[prop].sortBysAvailable;
                if(this.sortBysAvailable.length > 0){
                    this.sortBysAvailable = this.sortBysAvailable[
                        Math.floor(Math.random() * this.sortBysAvailable.length)]
                } else{
                    this.sortBysAvailable = undefined
                }
                NewsAPI.getNewsArticle(this.sourceId, this.sortBysAvailable)
            }
        }

    }

   componentWillMount(){
       NewsAPI.getNewsSources();
   }

   componentDidMount () {
       SourceStore.addChangeListener(this._onLoad);
       NewsAPI.getNewsArticle(this.defaultId,  this.sortBy);
   }
   componentWillUnmount (){
         SourceStore.removeChangeListener(this._onLoad);
   }

	render (){
   	    let rows = [];
   	    let change = this._onChange;
        if(this.state.sources[0]) {
            this.state.sources[0].map(function(item, index) {
                rows.push(<SourceItem key={index} value={item.id} name={item.name}
                                      onclick={change}/>)
            });
        }
		return (
		        <select defaultValue={this.defaultId}
                        onChange={this._onChange} onMouseOut={this._onChange}
                        className="col-lg-5 pull-left new-source"
                        onLoad={this._onLoad}>
                        {rows}
                </select>
			);
	}
}

