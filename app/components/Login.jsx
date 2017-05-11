/**
    @overview - NewsFeed Application that consumes
    www.newsapi.org api to display news sources based on selction
    @author Hope Ngerebara
    @license See file 'LICENSE.md' in this project.
 */

import React from "react";
import firebase from "firebase";
import Main from "../components/containers/Main";

const provider = new firebase.auth.GoogleAuthProvider();

/**
 * Class displaying Login Page
 * @extends React.Component
 */

export default class Login extends React.Component {
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

  // Fire base Initialization
  firebaseInit() {
    const config = {
      apiKey: FIREBASE_KEY,
      authDomain: AUTH_DOMAIN,
      databaseURL: DATABASE_URL,
      projectId: PROJECT_ID,
      storageBucket: STORAGE_BUCKET,
      messagingSenderId: MESSAGE_SENDER_ID
    };
    firebase.initializeApp(config);
  }

  /**
   * Invoked immediately after a component is mounted
   * @return {void} returns nothing
   */
  componentDidMount() {
    this.firebaseInit();
    const token = localStorage.getItem("accessToken");
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
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const token = result.credential.accessToken;
        const user = result.user;
        localStorage.setItem("accessToken", token);
        //Login the user if no errors found
        this.setState({
          loggedIn: true,
          user: user
        });
      })
      .catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;

        if (error) {
          return `${errorCode} ${errorMessage}`;
        } else if (email || credential) {
          return "Your email is already being used";
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
          <Main user={this.state.user} logout={this.logOut.bind(this)} />
        </div>
      );
    } else {
      return (
            <center><div className="main-body login-box col-md-12">
              <div className="intro-message">
                <h1>Welcome to Hopeaz news Feed Application</h1>
                <h5>
                  Please Login with your google account to view news from over 60 sources
                </h5>

                <button
                  className="gplus btnz"
                  onClick={this.googleLogin}>
                  <i className="fa fa-google fa-fw" />
                  <span >Login With Google</span>
                </button>
              </div>
            </div>
            </center>
      );
    }
  }
  render() {
    return (
      <div>
        {this.loginPage()}
      </div>
    );
  }
}
