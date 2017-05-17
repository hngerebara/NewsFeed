/* eslint-disable no-undef */
/**
    @overview - NewsFeed Application that consumes
    www.newsapi.org api to display news sources based on selction
    @author Hope Ngerebara
    @license See file 'LICENSE.md' in this project.
 */

import React from 'react';
import firebase from 'firebase';
import Main from '../components/containers/Main';

const provider = new firebase.auth.GoogleAuthProvider();

/**
   * @description Fire base Initialization
   * @memberOf Login
   * @returns {void}
   */
const firebaseInit = () => {
  const config = {
    apiKey: FIREBASE_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGE_SENDER_ID
  };
  firebase.initializeApp(config);
};

/**
 *
 * @description Class displaying Login Page
 * @export
 * @class Login
 * @extends {React.Component}
 */
export default class Login extends React.Component {
  /**
   * Creates an instance of Login.
   * @memberOf Login
   */
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: {}
    };
    this.loginPage = this.loginPage.bind(this);
    this.googleLogin = this.googleLogin.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  /**
   * @description Invoked immediately after a component is mounted
   * @return {void}
   */
  componentWillMount() {
    firebaseInit();
    const token = localStorage.getItem('accessToken');
    if (token) {
      this.setState({
        loggedIn: true,
        user: {}
      });
    }
  }

  /**
   * @description login user with firebase google login
   * @returns {null} null
   * @memberOf Login
   */
  googleLogin() {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const token = result.credential.accessToken;
        const user = result.user;
        localStorage.setItem('accessToken', token);
        // Login the user if no errors found
        this.setState({
          loggedIn: true,
          user
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;

        if (error) {
          return `${errorCode} ${errorMessage}`;
        } else if (email || credential) {
          return 'Your email is already being used';
        }
      });
  }

  /**
   * Logs user out
  * @returns {null} null
   */
  logOut() {
    localStorage.removeItem('accessToken');
    firebase.auth().signOut().then(() => {
      this.setState({
        loggedIn: false,
        user: null
      });
    });
  }

  /**
   * @description  Show the Login Component
   * @returns {JSX} jsx for the login component
   * @memberOf Login
   */
  loginPage() {
    if (this.state.loggedIn) {
      return (
        <div>
          <Main user={this.state.user} logout={this.logOut} />
        </div>
      );
    }
    return (
      <center>
        <div className="main-body login-box col-md-12">
          <div className="intro-message">
            <h1>Welcome to Hopeaz news Feed Application</h1>
            <h5>
              Please Login with your google account
              to view news from over 60 sources
            </h5>

            <button className="gplus btnz" onClick={this.googleLogin}>
              <i className="fa fa-google fa-fw" />
              <span>Login With Google</span>
            </button>
          </div>
        </div>
      </center>
    );
  }


  /**
   * @returns {JSX} login page
   * @memberOf Login
   */
  render() {
    return (
      <div>
        {this.loginPage()}
      </div>
    );
  }
}
