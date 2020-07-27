import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import Stock from './Stock'
import WebSocketComponent from './Websocket'

require("dotenv/config")

const params = {
  percent: process.env.REACT_APP_PERCENT_VARIANCE !== undefined ? process.env.REACT_APP_PERCENT_VARIANCE : 20,
  timeVariance: process.env.REACT_APP_TIME_VARIANCE !== undefined ? process.env.REACT_APP_TIME_VARIANCE : 1
}

export default function Stocks() {
  WebSocketComponent()

  const listValue = useSelector(state => state.listValue)
  const newValue = useSelector(state => state.newValue)
  const newTime = useSelector(state => state.newTime)

  const percentVarianceMore = 1 + (params.percent / 100)
  const percentVarianceLess = 1 - (params.percent / 100)

  function changeValue(newValue = '') {
    let key = Object.keys(newValue)
    let value = Object.values(newValue)

    listValue && listValue.forEach(element => {
      if (key[0] === element.stockName) {
        let diffTime = (newTime - element.time) / 1000
        if (diffTime >= params.timeVariance ||
          Number(value).toFixed(2) > Number(element.value).toFixed(2) * percentVarianceMore ||
          Number(value).toFixed(2) < Number(element.value).toFixed(2) * percentVarianceLess) {
            element.oldValue = element.value
            element.value = value
            element.time = newTime
        }
      }
    });
  }

  useEffect(() => {
    changeValue(newValue)
  }, [newValue])

  return (
    <div className='container-fluid d-flex justify-content-center row acoes mt-4'>
      {listValue && listValue.map(stock =>
        <Stock key={stock.stockName} stock={stock} />)}
    </div>
  )
}