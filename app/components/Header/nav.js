import React from 'react';
import firebase from 'firebase';
import reactfire from 'reactfire';

export default class NavBar extends React.Component {
    render(){
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header navbar-brand">
                        Hopeaz News Feed App
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="/#/setUp">Setup</a></li>
                    </ul>
                    
                        <button span className="nav navbar-nav navbar-right glyphicon glyphicon-log-out" onClick={this.props.logout.bind(this)}> Logout</button>
                    
                </div>
            </nav>
        );
    }
}
