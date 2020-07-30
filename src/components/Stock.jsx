import React from 'react'

import '../styles/Stock.css'

function Stock(props) {

  function mask(value) {
    return '$ ' + Number(value).toFixed(2)
  }

  return (
    <div className="col-md-2 card m-2">
      <h2 className='title-card mt-4 m-1 d-flex justify-content-center'> {props.stock !== undefined ? props.stock.stockName : ''}</h2>
      <h3 className='mt-2 m-1 d-flex justify-content-center'> {props.stock !== undefined ? props.stock.companyName : ''}</h3>
      <h4 className='mt-2 m-1 d-flex justify-content-center text-center'> {props.stock !== undefined ? props.stock.catchPhrase : ''}</h4>
      
      {props.stock !== undefined && props.stock.value < props.stock.oldValue ? (
        <h1 className='mt-2 mb-4 m-1 d-flex justify-content-center text-danger'> {props.stock !== undefined ? mask(props.stock.value) : ''}</h1>
      ) : (
        <h1 className='mt-2 mb-4 m-1 d-flex justify-content-center text-success'> {props.stock !== undefined ? mask(props.stock.value) : ''}</h1>
      )}
    </div>
  )
}

export default Stock