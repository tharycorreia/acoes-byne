import React, { useState, useEffect } from 'react'
import Acao from './Acao'
import '../styles/Acoes.css'

function Acoes() {
  const webSocket = new WebSocket('ws://localhost:8080');
  const [stockData, setStockData] = useState([])
  const [newPrice, setNewPrice] = useState([0])
  const [key, setKey] = useState(['Stock'])

  const msg = { stocks: ['IET', 'N', 'ZHT', 'V', 'ELY', 'TZW', 'FIK', 'T', 'ZQ', 'NP', 
  'MJ', 'KG', 'OY', 'ITN', 'OB', 'ACM', 'QQ', 'X', 'XLC', 'S'], event: 'subscribe' }
  //const msg = { stocks: ['IET', 'OB'], event: 'subscribe' }

  useEffect(() => {
    webSocket.onopen = () => {
      webSocket.send(JSON.stringify(msg))
    };

    webSocket.onmessage = (event) => {
      var data = JSON.parse(event.data)
      setStockData(data.stocksData)
    }
  }, [])

  setInterval(() => {
    if (webSocket.readyState == 1) {
      webSocket.send(JSON.stringify(msg))
      webSocket.onmessage = (event) => {
        var value = event.data !== null || event.data !== undefined ? JSON.parse(event.data) : 0
        var key = event.data !== null || event.data !== undefined ? JSON.parse(event.data) : 0
        value = value.stocks !== null || value.stocks !== undefined ? Object.values(value.stocks) : 0
        key = key.stocks !== null || key.stocks !== undefined ? Object.keys(key.stocks) : 0
        setNewPrice(value)
        setKey(key)
      }
    }
  }, 3000);

  webSocket.onerror = (error) => {
    console.log('WebSocket Error: ' + error);
  };

  webSocket.onclose = (event) => {
    console.log('Disconnected from WebSocket.', event);
  };

  function mask(value) {
    return '$ ' + value.toFixed(3)
  }

  return (
    <div>
      <div className='container card'>
        <h1 className='d-flex justify-content-center'> {key[0]}  {mask(newPrice[0])}</h1>
      </div>
      <div className='container d-flex justify-content-center row acoes'>

        {stockData && stockData.map((stock, index) => {
          return (
            <Acao acao={stock} key={index} />
          )
        })}
      </div>
    </div>

  )
}

export default Acoes