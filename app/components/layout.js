import React from 'react';
import Sources from '../components/sources';
import Articles from '../components/articles'; 


export default class Layout extends React.Component {
  render() { 
    return (
      <div>
  	      <div className="row">
              <Sources />
              
          </div>
      </div>
    );
  }
}