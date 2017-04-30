import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
//import Login from './login'
import Main from '../pages/main';
import SetUp from '../pages/setUp';
import './stylesheets/style.css';


// ReactDOM.render(
//     <Header headers="Latest News"/>,
//     document.getElementById('news-header')
// );

// ReactDOM.render( <
//     Login />, document.getElementById('app')
// );
// ReactDOM.render(
//     <Router>
//      <Route path="/" component={Main} history={browserHistory}>
//     <IndexRoute component={Home} />
//         <Route path="/setUp" component={SetUp}/>
//         </Route>
//     </Router>,
//     document.getElementById('app')
// );

ReactDOM.render( <
    Main />, document.getElementById('app')
);


// ReactDOM.render(
//     <Footer/>,
//     document.getElementById('news-footer')
// )
