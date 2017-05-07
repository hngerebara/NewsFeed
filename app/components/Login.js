/**
    @overview - NewsFeed Application that consumes
    www.newsapi.org api to display news sources based on selction
    @author Hope Ngerebara
    @license See file 'LICENSE.md' in this project.
 */


import React from 'react';
import firebase from 'firebase';
import Main from '../components/containers/main';
import '../stylesheets/style.css';

var provider = new firebase.auth.GoogleAuthProvider();

/**
 * Class displaying Login Page
 * @extends React.Component
 */

export default class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      user: {}
    }
    this.loginPage = this.loginPage.bind(this);
    this.googleLogin = this.googleLogin.bind(this);
  }

  // Fire base Initialization
  firebaseInit() {
    var config = {
      apiKey: "AIzaSyCGXsjsRvXzoMIDJTFl68ddkQsZAsUyHpo",
      authDomain: "newsfeedtest-165310.firebaseapp.com",
      databaseURL: "https://newsfeedtest-165310.firebaseio.com",
      projectId: "newsfeedtest-165310",
      storageBucket: "newsfeedtest-165310.appspot.com",
      messagingSenderId: "180657029449"
    };
    firebase.initializeApp(config);
  }

/**
   * Invoked immediately after a component is mounted
   * @return {void} returns nothing
   */
  componentDidMount() {
    this.firebaseInit();
    const token = localStorage.getItem('accssToken');
    if (token) {
      this.setState({
        loggedIn: true,
        user: {}
      });
    }
  }

/**
   * Checks user credential
   * @param event
   */
  googleLogin(event) {
    firebase.auth().signInWithPopup(provider).then(result => {
      var token = result.credential.accessToken;
      var user = result.user;
      localStorage.setItem('accssToken', token);
      //Login the user if no errors found
      this.setState({
        loggedIn: true,
        user: user
      });


    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;

      if (error) {
        return (`${errorCode} ${errorMessage}`);
      } else if (email || credential) {
        return ("Your email is already being used");
      }

    });
  }

    /**
   * Logs user out
   * @returns null
   * @param event
   */
  logOut() {
    localStorage.removeItem("accessToken");
    firebase.auth().signOut().then(() => {
      this.setState({
        loggedIn: false,
        user: null
      });
    });

  }
 
   /**
   * Show the Login Component
   * @return {jsx} Show the login component
   */
 
  loginPage() {
    if (this.state.loggedIn) {
      return (
        <div>
          <Main user={this.state.user} logout={this.logOut.bind(this)}/>
        </div>
      );
    }
    else {
      return (
        <div>
            <div className="siteNav">
              <div className="siteTitle">
                <h1>Hopeaz Newsfeed</h1>
              </div>
          </div>
              <div className="mainBody">
                <div className="col-lg-12">
                  <div className="intro-message">
                    <h1>Welcome to Hopeaz news Feed Application</h1>
                    <h5>Please Login with your google account to view news from over 60 sources</h5>
                   
                    <button className="list-inline intro-social-buttons login_button"  onClick={this.googleLogin}><i className="fa fa-google fa-fw"></i> <span className="network-name">Login With Google</span></button>
                  </div>
                </div>
          </div>
        </div>
      )};
  }
  render() {
    return (
      <div>
        {this.loginPage()}
      </div>
    );
  }
}
