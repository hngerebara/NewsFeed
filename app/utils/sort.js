import React from 'react';
import NewsStore from "../stores/NewsStore";
import EventConstants from "../constants/EventConstants";

export default class filter extends React.component {
    constructor(props) {
        super(props)
        this.state = {
            sortBy: 'top',
            data: this.props.articles.sort(sortTop)
        }
    }

    sortData() {
        if (this.state.sortType === 'latest') {
            this.setState = {
                sortBy: 'latest',
                data: this.props.articles.sort(sortLatest)
            }
        }
        else {
            this.setState = {
                sortBy: 'popular',
                data: this.props.articles.sort(sortPopular)
            }
        }
    }
}
render() {
    return (
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
    );
}

