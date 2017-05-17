import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './Header/Nav';

/**
 * @description Header navigation component
 */

const Header = props => (
  <div>
    <NavBar logout={props.logout} />
  </div>);


Header.propTypes = {
  logout: PropTypes.func.isRequired
};

export default Header;
