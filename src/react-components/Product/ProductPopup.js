import React, { Component} from 'react';
import Popup from '../Navbar/Popup.js';

class ProductPopup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {
        id: 2,
        name: 'Code4Startup',
        link: 'https://code4startup.com',
        media: '/img/code4startup.jpeg',
        upvote: 278,
        description: 'Code for startup',
        maker: {
          name: 'leo',
          avatar: '/img/leo.jpeg'
        }
      }
    }
  }

  renderUpvoteButton() {
    return (
      <a className="upvote-button" href="#">
        <span>
          <i className="fa fa-sort-asc"></i>
        </span>
        {this.state.product.upvote}
      </a>
    );
  }

  renderHeader() {
    return (
      <header style={{backgroundImage: 'url(' + this.state.product.media + ')'}}>
        <section className="header-shadow">
          <h1>{this.state.product.name}</h1>
          <p>{this.state.product.description}</p>
          <section>
            {this.renderUpvoteButton()}
            <a href={this.state.link} target="_blank" className="getit-btn">GET IT</a>
          </section>
        </section>

      </header>
    );
  }

  renderBodyDiscussion() {
    return (
      <section className="discussion">
        <h2>Discussion</h2>
        <section className="post-comment">
          <img src="/img/leo.jpeg" className="medium-avatar"/>
          <input placeholder="What do you think about this product?" />
        </section>
      </section>
    );
  }

  renderBody() {
    return(
      <section className="product-popup-body">
        <main>
          {this.renderBodyDiscussion()}
        </main>
      </section>
    );
  }

  render() {
    return(
      <Popup {...this.props} style="product-popup">
        {this.renderHeader()}
        {this.renderBody()}
      </Popup>
    );
  }
}

export default ProductPopup;
