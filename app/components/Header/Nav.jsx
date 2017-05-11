import React from "react";
import firebase from "firebase";

export default class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse col-md-12">
        <div className="container-fluid col-md-10">
          <div className="navbar-header navbar-brand">
            Hopeaz News Feed App
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Home</a></li>
          </ul>
        </div>
        <div className="col-md-2">
          <button
            className="glyphicon glyphicon-log-out"
            onClick={this.props.logout.bind(this)}>
            Logout
          </button>
        </div>
      </nav>
    );
  }
}
