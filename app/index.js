import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Login from './login'
// import Main from '../pages/main';
import SetUp from '../pages/setUp';
require('./stylesheets/style.css');

ReactDOM.render(<
    Login />, document.getElementById('app')
);
// ReactDOM.render(
//     <Router history={hashHistory}>
//      <Route path="/" component={Main} />
//      <Route path="/setUp" component={SetUp}/>
//     </Router>,
//     document.getElementById('app')
// );
