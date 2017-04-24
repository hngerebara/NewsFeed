import React from 'react';
import SourceStore from "../stores/SourceStore.js";
import EventConstants from "../constants/EventConstants";

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { filteredDataList: this.sources };
    }

    _OnFilterChange(event) {

        let value = event.target.value;
        for (let i = 0; i < sources.length; i++) {
            var filterBy = event.target.value.toString().toLowerCase();
            var size = this.sources.length;
            let filteredList = [];
            for (let index = 0; index < size; index++) {
                var v = this.sources[index][cellDataKey];
                if (v.toString().toLowerCase().indexOf(filterBy) !== -1) {
                    filteredList.push(this.rows[index]);
                }
                SourceStore.emit(EventConstants.CHANGE_EVENT);
                break;
            }
        }
        this.setState({
            filteredDataList: filteredList,
        });
    }


    render() {
        return (
            <div className="col-xs-8 col-xs-offset-2">
                <input type="hidden" name="search_param" value="all" id="search_param" />
                <input type="text" className="form-control" name="x" placeholder="Search News...." onKeyUp={this._OnFilterChange.bind(this)} />
                <span className="input-group-btn">
                    <button className="btn btn-default" type="submit"><span className="glyphicon glyphicon-search"></span></button>
                </span>
            </div>

        )
    }
}