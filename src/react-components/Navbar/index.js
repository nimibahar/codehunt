import React, { Component } from 'react';
import Popup from './Popup.js';

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
        <a href="#" onClick={this.showPopUp} className="login-btn">LOGIN</a>
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
        <Popup status={this.state.popUpStatus} hidePopUp={this.hidePopUp}/>
      </section>
    );
  }
}

export default Navbar;
