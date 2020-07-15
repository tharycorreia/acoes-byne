import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import Acoes from './components/Acoes'

class App extends Component {

  render() {
    return (
      <div className="App pb-4">
        <Title />
        <Acoes />
      </div>
    );
  }

}

export default App;
