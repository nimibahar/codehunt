import React, { Component } from 'react';
import ProductList from '../Product/ProductList.js';
import Firebase from 'firebase';
import firebaseConfig from '../../../config.js';


Firebase.initializeApp(firebaseConfig);

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: []
    }

    Firebase.database().ref('products').on('value', (snapshot) => {
      var products = snapshot.val();

      this.setState({
        productList: products
      })
    });

  }

  render() {
    return (
      /*-- a wrapping element --*/
      <section>

        <header>
          <img src="/img/banner.jpeg" width="100%" />
        </header>

        <section>
          <section className="container">

            {
              this.state.productList
              ?
              <ProductList productList={this.state.productList} />
              :
              null
            }

          </section>
        </section>
      </section>
      /*-- end wrapping element --*/
    );
  }
}

export default HomePage;
