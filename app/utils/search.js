import React from 'react';
import SourceStore from "../stores/SourceStore.js";
import *  as  NewsAPI from "./NewsAPI.js";
import EventConstants from "../constants/EventConstants";

export default class Search extends React.Component {

    _addKeyUpListener(event){
        let sources = SourceStore.getAll()[0];
        let value = event.target.value;
        for (let i=0; i < sources.length; i++){
            if (sources[i].id.includes(value) || sources[i].name.includes(value)
                || sources[i].description.includes(value)){
                let source = sources[i].id;
                NewsAPI.getNewsArticle(source);
                SourceStore.emit(EventConstants.CHANGE_EVENT);
                break;
            }
        }
    }

    render(){
        return (
            <div class="col-xs-8 col-xs-offset-2">
                <div class="input-group">
                    <div class="input-group-btn search-panel">
                        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                            <span id="search_concept">Sort By</span> <span class="caret"></span>
                        </button>
                        <ul className="dropdown-menu" role="menu" onClick={this.sortData}
                            className={this.state.sortDirection}>
                            <li className="dropdown-header"> Top</li>
                            <li><a href="#">Latest</a></li>
                            <li><a href="#">Available</a></li>
                        </ul>
                    </div>
                    <input type="hidden" name="search_param" value="all" id="search_param"/>
                    <input type="text" class="form-control" name="x" placeholder="Search News...."onKeyUp={this._addKeyUpListener.bind(this)}/>
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="submit"><span class="glyphicon glyphicon-search"></span></button>
                    </span>
                </div>
            </div>

        )
    }
}