import React from 'react'
import '../styles/Acao.css'

function Acao(props) {
  return (
    <div className="card">
      <h1 className='title-card m-3 d-flex justify-content-center'>simbol - company name</h1>
      <div>
        <h2 className='d-flex justify-content-center'>base price</h2>
        <h3 className='d-flex justify-content-center'>catch price</h3>
      </div>
    </div>
  )
}

export default Acao