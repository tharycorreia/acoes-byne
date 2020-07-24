import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

require("dotenv/config")

const params = {
  URL: process.env.REACT_APP_URL,
  PORT: process.env.REACT_APP_PORT
}

export default function WebsSocket() {

  const dispatch = useDispatch()
  const [stockList, setStockList] = useState([])
  const defaultAddress = 'ws://localhost:8080'

  function createWS() {
    
    const url = params.URL === undefined ? defaultAddress : params.URL + ':' + params.PORT;
    const webSocket = new WebSocket(url);

    webSocket.onopen = () => {
      console.log('WebSocket Open')
    };

    webSocket.onerror = (error) => {
      console.log('WebSocket Error: ' + error);
    };

    webSocket.onclose = () => {
      console.log('Disconnected from WebSocket.');

      setTimeout(function () { 
        createWS() 
      }, 3000);
    }

    webSocket.onmessage = (event) => {
      let data = JSON.parse(event.data)

      if (data.event === 'connected') {
        data = data.supportedSymbols
        setStockList(data)
        webSocket.send(JSON.stringify({
          stocks: data, event: 'subscribe'
        }))
      }

      if (data.event === 'stocks-update') {
        dispatch({ type: 'NEW_VALUE', newValue: data.stocks })
      }
    }
  }

  const [stockObjects, setStockObjects] = useState([])
  function transfToObject(stockList) {
    setStockObjects([])
    stockList.forEach((stock) => {
      stockObjects.push({ stockName: stock, value: 0 })
    })
    dispatch({ type: 'CHANGE_LIST_VALUE', listValue: stockObjects })
  }

  useEffect(() => {
    transfToObject(stockList);
  }, [stockList])

  useEffect(() => {
    dispatch({ type: 'STOCK_LIST', list: stockList })
  }, [stockList, dispatch])

  useEffect(() => {
    createWS()
  }, [])

  return ('')
}