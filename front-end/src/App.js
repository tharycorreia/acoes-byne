import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import Acoes from './components/Acoes'
import io from 'socket.io-client'

/*const socket = io('http://localhost:8080')
socket.on('connect', () => console.log('[IO] Connect => New connetion') )*/

class App extends Component {

  render() {
    return (
      <div className="App">
        <Title />
        <Acoes />
      </div>
    );
  }

}

export default App;
