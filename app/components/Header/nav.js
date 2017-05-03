import React from 'react';

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
                    <ul className="nav navbar-nav navbar-right">
                        <li><span className="glyphicon glyphicon-log-out"/> Logout</li>
                    </ul>
                </div>
            </nav>
        );
    }
}
