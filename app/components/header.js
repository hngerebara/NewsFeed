import React from 'react';
import Title from './Header/title';
import NavBar from "./Header/nav";

export default class Header extends React.Component {
  render() {
    return (
            <div>
                <NavBar logout2={this.props.logout1}/>
                <Title headers={this.props.headers}/>
            </div>
    );
  }
}