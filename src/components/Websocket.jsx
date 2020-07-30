import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

require("dotenv/config")

const params = {
  URL: process.env.REACT_APP_URL,
  PORT: process.env.REACT_APP_PORT
}

export default function WebSocketComponent() {

  const dispatch = useDispatch()
  
  const [stockList, setStockList] = useState([])
  const [stockObjects, setStockObjects] = useState([])
  const defaultAddress = 'ws://localhost:8080'

  var webSocket

  function createWS() {
    
    const url = params.URL === undefined ? defaultAddress : params.URL + ':' + params.PORT;
    webSocket = new WebSocket(url);

    webSocket.onopen = () => {
      console.log('WebSocket Open')
    };

    webSocket.onerror = (error) => {
      console.log('WebSocket Error: ' + error);
    };

    webSocket.onclose = () => {
      console.log('Disconnected from WebSocket.');
      createWS()
    }

    webSocket.onmessage = (event) => {
      parseData(event)
    }
  }

  function parseData(event) {
    let data = JSON.parse(event.data)

    if (data.event === 'connected') {
      setStockList(data.stocksData)
      data = data.supportedSymbols
      webSocket.send(JSON.stringify({
        stocks: data, event: 'subscribe'
      }))
    }

    if (data.event === 'stocks-update') {
      dispatch({ type: 'NEW_VALUE', newValue: data.stocks, newTime: Date.now()})
    }
  }

  function transfToObject(stockList) {
    setStockObjects([])
    stockList.forEach((stock) => {
      stockObjects.push({ 
        stockName: stock.symbol, 
        companyName: stock.companyName,
        catchPhrase: stock.catchPhrase,
        basePrice: stock.basePrice,
        value: 0,
        oldValue: 0,
        time: Date.now()
      })
    })
    dispatch({ type: 'CHANGE_LIST_VALUE', listValue: stockObjects })
  }

  useEffect(() => {
    transfToObject(stockList);
  }, [stockList])

  useEffect(() => {
    createWS()
  }, [])

  return ('')
}