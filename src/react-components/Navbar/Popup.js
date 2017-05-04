import React, { Component } from 'react';

class Popup extends Component {
  renderPopupContent() {
    return (
      <section className="popup">
        <section className="popup-wrapup">
          <img src="/img/close.png" onClick={this.props.hidePopUp} />
        </section>
        <section className="popup-content">
          <section>POPUP CONTENT SHOULD BE HERE</section>
        </section>
      </section>
    );
  }

  render() {
    return (
      <section>
        {
          this.props.status ? this.renderPopupContent() : null
        }
      </section>
    );
  }
}

export default Popup;
