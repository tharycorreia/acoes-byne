import React, { useState } from 'react'
import Acao from './Acao'
import '../styles/Acoes.css'

function Acoes() {
  const webSocket = new WebSocket('ws://localhost:8080');
  const [stockData, setStockData] = useState([])
  
  webSocket.onmessage = function(event) {
    var data = JSON.parse(event.data)
    setStockData(data.stocksData)
  } 

  webSocket.onerror = function(error) {
    console.log('WebSocket Error: ' + error);
  };

  webSocket.onclose = function(event) {
    console.log('Disconnected from WebSocket.', event);
  };

  webSocket.onopen = function(event) {
    console.log("WebSocket is open now.", event);
    
  };

  return (
    <div className='container d-flex justify-content-center row acoes'>
      {stockData && stockData.map((stock, index) => {
        return (
          <Acao acao={stock} key={index} />
        )
      })}
    </div>


  )

}

export default Acoes