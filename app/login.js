import React from 'react';
import firebase from 'firebase';
import Main from './components/Layout/main';

var provider = new firebase.auth.GoogleAuthProvider();

export default class Login extends React.Component {
constructor() {
  super()
  this.state = {
    loggedIn: false,
    user:  {}
}
  this.whichWindowToShow = this.whichWindowToShow.bind(this);
  this.googleLogin = this.googleLogin.bind(this);
}

  // Fire base Initialization
  firebaseInit() {
    console.log("hhhsj iw");
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

  componentDidMount(){
    this.firebaseInit();
 }



  authenticateUser = {
    userStatus() {
      //CHECKING IF SIGNED IN
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          // USER IS SIGNED IN
          this.setState({
            loggedIn: 'true'
          });
        } else {
          // USER IS SIGNED OUT
          this.setState({
            loggedIn: 'false'
          });
        }
      })
    },

    //get user profile
    userProfile() {
      var user = firebase.auth().currentUser;
      var name, email, photoUrl, token, emailVerified;

      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        token = user.token;
      }
      //To get user provider
      

      if (user != null) {
        user.providerData.forEach(function (profile) {
          console.log("Sign-in provider: " + profile.providerId);
          console.log("  Provider-specific UID: " + profile.uid);
          console.log("  Name: " + profile.displayName);
          console.log("  Email: " + profile.email);
          console.log("  Photo URL: " + profile.photoURL);
        });
      }
    }
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

  whichWindowToShow() {
    console.log(this.state.loggedIn, 'loggedin?')
    // if (this.state.loggedIn === 'unknown') {
    //   return (
    //     <div>
    //       <h1> Cannot find your details on google </h1>
    //     </div>
    //   );
    // }
    // else 
    if (this.state.loggedIn) {
      return (
        <div>
          <Main user={this.state.user} />
        </div>
      );
    }
    else {
      return (
        <div>
          <button onClick={this.googleLogin} id="google" > Login With Google </button>
        </div>
      );
    }
  }


  render() {
    let logoutButton = <button>Log Out</button>
    return (
      <div>
        {this.whichWindowToShow()}
      </div>
    );
  }
}