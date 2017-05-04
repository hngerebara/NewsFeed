import React from 'react';
import firebase from 'firebase';
import Main from '../pages/main';
import './stylesheets/style.css';

//Installed firebase
var provider = new firebase.auth.GoogleAuthProvider();

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

  componentDidMount() {
    this.firebaseInit();
  }

  googleLogin(event) {
    firebase.auth().signInWithPopup(provider).then(result => {
      console.log(result, 'result')
      var token = result.credential.accessToken;
      var user = result.user;

      //Login the user if no errors found
      this.setState({
        loggedIn: true,
        user: user
      });


    }).catch(function (error) {
      console.log(error, 'error')
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
  logOut() {
    firebase.auth().signOut().then(() => {
      this.setState({
        loggedIn: false,
        user: null
      });
    });

  }

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
          
            <div className="container">
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
