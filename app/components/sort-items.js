import React from 'react';

export default class SortItem extends React.Component {
    render() {
        return (<option className="dropdown-header sort-by"
                        value={this.props.value} >
            {this.props.name}
        </option>)
    }
}
