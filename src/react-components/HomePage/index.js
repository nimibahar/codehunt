import React, { Component } from 'react';
import ProductList from '../Product/ProductList.js'

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [
        {
          id: 1,
          name: 'Codecademy',
          link: 'https://codecademy.com',
          media: '/img/codecademy.jpeg',
          upvote: 169,
          description: 'Code for anyone',
          maker: {
            name: 'hieu',
            avatar: '/img/hieu.jpeg'
          }
        },
        {
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
      ]
    }
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
