import React, { Component } from 'react';
import { Provider } from 'react-redux'

import store from './store'
import Title from './components/Title'
import Stocks from './components/Stocks'

import './App.css';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App pb-4">
          <Title />
          <Stocks />
        </div>
      </Provider>
    );
  }

}

export default App;
