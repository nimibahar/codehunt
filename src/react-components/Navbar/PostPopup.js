import React, { Component } from 'react';
import Popup from './Popup.js';


class PostPopup extends Component {

  handlePost = () => {

  };

  render() {
    return(
      <Popup {...this.props} style="post-popup">
        <header className="post-header">Post a new Product</header>
        <section>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td><input placeholder="Enter a product's name"/></td>
              </tr>
              <tr>
                <td>Description</td>
                <td><input placeholder="Enter a product's Description"/></td>
              </tr>
              <tr>
                <td>Link</td>
                <td><input placeholder="http://www..."/></td>
              </tr>
              <tr>
                <td>media</td>
                <td><input placeholder="Put a direct link to image"/></td>
              </tr>
            </tbody>
          </table>
          <footer className="post-footer">
            <button onClick={ this.handlePost } className="post-btn">Hunt it!</button>
          </footer>
        </section>
      </Popup>
    );
  }
}

export default PostPopup;
