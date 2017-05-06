import React from 'react';
import NavBar from "./Header/nav";

export default class Header extends React.Component {
  render() {
    return (
            <div>
                <NavBar logout={this.props.logout}/>
            </div>
    );
  }
}