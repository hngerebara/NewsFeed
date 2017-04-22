import React from 'react';
import SideBar from './leftSide';
import RightSide from './rightSide';


export default class Home extends React.Component {
  render() { 
    return (
      <div>
        <SideBar/>
        <RightSide />
      </div>
    );
  }
}