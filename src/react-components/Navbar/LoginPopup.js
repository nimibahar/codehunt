import React, { Component } from 'react';
import Popup from './Popup.js';
import Firebase from 'firebase';

class LoginPopup extends Component {
  handleLogin = () => {
    var provider = new Firebase.auth.FacebookAuthProvider();
    provider.addScope('public_profile');

    Firebase.auth().signInWithPopup(provider).then(function(result) {
      var user = result.user;
      console.log('Login successfully!', user);
      }).catch(function(error) {
      console.log('Failed!', error);
      });
  };

  render() {
    return (
      // the ...this.props is just a shortcut
      // it means pass all the props of the
      // LoginPopup Component. it can also be:
      // status={this.props.status} hidePopup={this.props.hidePopup}
      <Popup {...this.props} style="login-popup">
        <img src="./img/kitty.png"/>
        <h2>Login to join the community</h2>
        <p>Codehunt is a community to geek out and share about the latest code, podecast and new code stuff </p>
        <button className="facebook-btn" onClick={this.handleLogin}>Login with Facebook</button>
        <p>We'll never post anything without your permission.</p>
      </Popup>
    );
  }
}

export default LoginPopup;
