import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import Stock from './Stock'

export default function Stocks() {

  const listValue = useSelector(state => state.listValue)
  const newValue = useSelector(state => state.newValue)

  function changeValue(newValue = '') {
    let key = Object.keys(newValue)
    let value = Object.values(newValue)
    listValue && listValue.forEach(element => {
      if (key[0] === element.stockName) {
        element.value = value
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