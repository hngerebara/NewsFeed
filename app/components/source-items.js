import React from 'react';
import * as NewsAPI from '../utils/NewsAPI';

export default class SourceItem extends React.Component {
    render() {
        return (<option className="dropdown-header new-sources"
                        value={this.props.value} onClick={this.props.onclick}>
                    {this.props.name}
               </option>)
    }
}
