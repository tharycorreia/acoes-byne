import React from 'react'
import '../styles/Acao.css'

function Acao(props) {
  let symbol = props.acao.key
  let price = props.acao.value
  let oldValue = props.acao.oldValue

  function mask(value) {
    return '$ ' + value.toFixed(2)
  }

  return (
    <div className="col-md-2 card m-2">
      <h2 className='title-card mt-2 m-1 d-flex justify-content-center'> {symbol}</h2>
      {(price.toFixed(2) > oldValue.toFixed(2)) ? 
        <h3 className='text-center pt-2 text-success'>{mask(price)}</h3> : 
        <h3 className='text-center pt-2 text-danger'>{mask(price)}</h3>
      }
    </div>
  )
}

export default Acao