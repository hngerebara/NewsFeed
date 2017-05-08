import React from "react";

/**
 * Class to hold source itemms
 * @extends React.Component
 * @param {props} value - source id, name - source name
 * @return {*} returns to the parent
 */
export default class SourceItem extends React.Component {
  render() {
    return (
      <option
        className="list-group-item new-sources"
        value={this.props.value}
        onClick={this.props.onclick}>
        {this.props.name}
      </option>
    );
  }
}