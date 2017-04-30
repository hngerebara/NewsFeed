import React from 'react';

export default class SortItem extends React.Component {
    render() {
        return (<option className="dropdown-header sort-by"
                        value={this.props.value} onChange={this.props.OnSortChange}>
            {this.props.name}
        </option>)
    }
}
