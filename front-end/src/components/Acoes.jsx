import React from 'react'
import Acao from './Acao'

export default props => {
  const webSocket = new WebSocket('ws://localhost:8080');
  console.log('wss', webSocket)

  webSocket.onopen = function () {
    console.log('WebSocket Client Connected');
    console.log('webSocket', webSocket)
  };

  let event = webSocket.stocks
  console.log('e', event)
  return (
    <div className="container">
      <Acao />
    </div>
  )
}
