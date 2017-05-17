import React from 'react';
import PropTypes from 'prop-types';

/**
 * @description Class to hold source itemms
 * @class SourceItem
 * @extends {React.Component}
 * @return {*} returns to the parent
 */

const SourceItem = props => (
  <option
    className="list-group-item new-sources"
    value={props.value}
    onClick={props.onclick}
  >
    {props.name}
  </option>
  );

SourceItem.propTypes = {
  value: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};


export default SourceItem;
