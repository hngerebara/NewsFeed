import React from 'react';
import PropTypes from 'prop-types';

const NavBar = (props) => (
  <nav className="navbar navbar-inverse col-md-12">
    <div className="container-fluid col-md-10">
      <div className="navbar-header navbar-brand">
        Hopeaz News Feed App
      </div>
      <ul className="nav navbar-nav">
        <li className="active">
          <a href="#">Home</a>
        </li>
      </ul>
    </div>
    <div className="col-md-2">
      <button
        className="glyphicon glyphicon-log-out"
        onClick={props.logout}
      >
        Logout
      </button>
    </div>
  </nav>
);

NavBar.propTypes = {
  logout: PropTypes.func.isRequired
};

export default NavBar;
