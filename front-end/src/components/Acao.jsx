import React from 'react'
import '../styles/Acao.css'

function Acao(props) {
  let symbol = props.acao.symbol
  let companyName = props.acao.companyName
  let basePrice = props.acao.basePrice
  let catchPhrase = props.acao.catchPhrase

  return (
    <div className="col-md-2 card m-2">
      <h2 className='title-card mt-2 m-1 d-flex justify-content-center'> {symbol}</h2>
      <h3 className='text-center pt-2'>{companyName}</h3>
      <h3 className='text-center'>Base price: {basePrice}</h3>
      <h4 className='text-center'>{catchPhrase}</h4>
    </div>
  )
}

export default Acao