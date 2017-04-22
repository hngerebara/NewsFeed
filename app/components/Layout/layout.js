import React from 'react';
import Options from './options';
import NewsPage from './news-page'; 


export default class Layout extends React.Component {
  render() { 
    return (
      <div>
  	      <div>
              <Options/>
              <NewsPage/>
          </div>
      </div>
    );
  }
}