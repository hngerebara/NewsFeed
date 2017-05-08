import React from 'react';
import Title from './Header/title';
import NavBar from "./Header/nav";

export default class Header extends React.Component {
  render() {
    return (
            <div>
                <NavBar logout={this.props.logout}/>
                <Title headers={this.props.headers}/>
            </div>
    );
  }
}