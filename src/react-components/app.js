import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <h2>Initial App component</h2>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
