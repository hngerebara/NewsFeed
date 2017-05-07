import React from "react";
import NavBar from "./Header/nav";

/**
 * Header navigation component
 */
export default class Header extends React.Component {
  render() {
    return (
      <div>
        <NavBar logout={this.props.logout}/>
      </div>
    );
  }
}
