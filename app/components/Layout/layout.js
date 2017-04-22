import React from 'react';
import Options from './options';
import NewsPage from './news-page'; 


export default class Layout extends React.Component {
  render() { 
    return (
      <div>
  	      <div>
                <h3>Please select News Source </h3>
              <Options/>
              <NewsPage/>
          </div>
      </div>
    );
  }
}