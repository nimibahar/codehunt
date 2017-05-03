import React, { Component } from 'react';
import ProductItem from './ProductItem.js';


class ProductList extends Component {
  render() {
    return (
      <ul className="product-list">

        {
          this.props.productList.map(function(item, index) {
            return <ProductItem key={index} {...item} />
          })
        }

      </ul>
    );
  }
}

export default ProductList;
