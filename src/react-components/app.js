import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <HomePage/>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
