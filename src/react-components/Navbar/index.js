import React, { Component } from 'react';
import LoginPopup from './LoginPopup.js';
import PostPopup from './PostPopup.js';

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      popUpStatus: false
    };

    this.showPopUp = this.showPopUp.bind(this);
    this.hidePopUp = this.hidePopUp.bind(this);
  }

  showPopUp() {
    return this.setState({popUpStatus: true});
  };

  hidePopUp() {
    return this.setState({popUpStatus: false});
  };



  renderProductSearch() {
    return (
      <section className="left-side">
        <input placeholder="SEARCH" className="product-search"/>
      </section>
    );
  }

  renderLogo() {
    return (
      <a href="#"><img src="img/favicon.ico"/></a>
    );
  }

  renderUser() {
    return (
      <section className="right-side">
        {
          this.props.user

          ?

          //Display Post link here
          <section>
            <span>
              <a href="#" onClick={this.showPopUp} className="login-btn">POST</a>
            </span>
            <PostPopup status={this.state.popUpStatus} hidePopUp={this.hidePopUp} />
          </section>

          :

          //Display login link here
          <section>
            <span>
              <a href="#" onClick={this.showPopUp} className="login-btn">LOGIN</a>
            </span>
            <LoginPopup status={this.state.popUpStatus} hidePopUp={this.hidePopUp}/>
          </section>
        }
      </section>
    );
  }


  render() {
    return (
      <section>
        <section className="navbar">
          {this.renderProductSearch()}
          {this.renderLogo()}
          {this.renderUser()}
        </section>
      </section>
    );
  }
}

export default Navbar;
