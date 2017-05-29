import React, { Component } from 'react';
import ProductPopup from './ProductPopup.js';

class ProductItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productPopupStatus: false
    }
  }

  showProductPopup = () => {
    this.setState({productPopupStatus: true});
  }

  hideProductPopup = () => {
    this.setState({productPopupStatus: false});
  }

  renderUpvoteButton() {
    return (
      <a className="upvote-button" href="#">
        <span>
          <i className="fa fa-sort-asc"></i>
        </span>
        {this.props.upvote}
      </a>
    );
  }

  renderWindowIcon() {
    return (
      <a className="product-item-link" href={this.props.link}>
        <span>
          <i className="fa fa-external-link"></i>
        </span>
      </a>
    );
  }

  renderInfoSession() {
    return (
      <section className="product-item-info">
        <a href="#" onClick={this.showProductPopup} >
          <h2>{this.props.name}</h2>
        </a>
        <p>{this.props.description}</p>
        <a href="#">
          <img className="small-avatar" src={this.props.maker.avatar} />
        </a>
      </section>
    );
  }

  render() {
    return (
      <li className="product-item">
        {this.renderUpvoteButton()}
        <img className="product-item-media" src={this.props.media} />
        {this.renderInfoSession()}
        {this.renderWindowIcon()}
        <ProductPopup status={this.state.productPopupStatus} hidePopup={this.hideProductPopup} />
      </li>
    );
  }
}

export default ProductItem;
