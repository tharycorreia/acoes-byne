import React, { useState, useEffect } from 'react'
import Acao from './Acao'
import '../styles/Acoes.css'

function Acoes() {
  const webSocket = new WebSocket('ws://localhost:8080');
  const [stockData, setStockData] = useState([])
  const msg = { stocks: ['IET', 'N', 'ZHT', 'V', 'ELY', 'TZW', 'FIK', 'T', 'ZQ', 'NP', 'MJ', 'KG', 'OY', 'ITN', 'OB', 'ACM', 'QQ', 'X', 'XLC', 'S'], event: 'subscribe' }

  useEffect(() => {
    webSocket.onopen = (event) => {
      webSocket.send(JSON.stringify(msg))
    };

    webSocket.onmessage = (event) => {
      var data = JSON.parse(event.data)
      setStockData(data.stocksData)
    }
  }, [])

  webSocket.onerror = (error) => {
    console.log('WebSocket Error: ' + error);
  };

  webSocket.onclose = (event) => {
    console.log('Disconnected from WebSocket.', event);
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