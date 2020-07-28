import React from 'react'

import '../styles/Stock.css'

function Stock(props) {

  function mask(value) {
    return Number(value).toFixed(3)
  }
  
  return (
    <div className="col-md-2 card m-2">
      <h2 className='title-card mt-2 m-1 d-flex justify-content-center'> {props.stock !== undefined ? props.stock.stockName : ''}</h2>
      <h2 className='title-card mt-2 m-1 d-flex justify-content-center'> {props.stock !== undefined ? mask(props.stock.value) : ''}</h2>
    </div>
  )
}

export default Stock