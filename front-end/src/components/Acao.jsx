import React from 'react'
import '../styles/Acao.css'

function Acao(props) {
  let symbol = props.acao.key
  let price = props.acao.value

  function mask(value) {
    return '$ ' + value.toFixed(2)
  }
  return (
    <div className="col-md-2 card m-2">
      <h2 className='title-card mt-2 m-1 d-flex justify-content-center'> {symbol}</h2>
      <h3 className='text-center pt-2 text-danger'>{mask(price)}</h3>
    </div>
  )
}

export default Acao