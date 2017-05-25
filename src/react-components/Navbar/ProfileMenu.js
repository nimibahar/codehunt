import React, { Component } from 'react';

class ProfileMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showProfileNav: false
    }
  }

  handleClick = () => {
    if (this.state.showProfileNav) {
      this.setState({showProfileNav: false});
    } else {
      this.setState({showProfileNav: true});
    }
  };

  componentWillMount() {
    window.addEventListener("click", this.handleClickOutside, false);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleClickOutside, false);
  }

  handleClickOutside = (e) => {
    if (e.target != this.refs.profileBtn) {
      this.setState({showProfileNav: false});
    }
  };

  renderProfileNav() {
    return (
      <nav className="profile-nav" ref="profileNav">
        <a href="#">My profile</a>
        <a href="#">Logout</a>
      </nav>
    );
  }

  render() {
    return(
      <section className="profile-menu">
        <img src="img/leo.jpeg" onClick={this.handleClick} className="profile-btn medium-avatar" ref="profileBtn"/>
        {
          this.state.showProfileNav? this.renderProfileNav() : null
        }
      </section>
    );
  }
}

export default ProfileMenu;
