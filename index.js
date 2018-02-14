import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import './style.css';
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
      </div>
    );
  }
}

render(
<Provider store={createStoreWithMiddleware(reducers)}>
  <App />
</Provider>
  , document.getElementById('root'));
