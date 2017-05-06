import React, { Component } from 'react';
import Popup from './Popup.js';

class LoginPopup extends Component {
  render() {
    return (
      <Popup {...this.props} style="login-popup">
        <img src="./img/kitty.png"/>
        <h2>Login to join the community</h2>
        <p>Codehunt is a community to geek out and share about the latest code, podecast and new code stuff </p>
        <button className="facebook-btn">Login with Facebook</button>
        <p>We'll never post anything without your permission.</p>
      </Popup>
    );
  }
}

export default LoginPopup;
