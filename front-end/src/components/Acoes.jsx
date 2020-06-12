import React, { useState, useEffect } from 'react'
import Acao from './Acao'
import '../styles/Acoes.css'

function Acoes() {

  const [ietValue, setIet] = useState(0)
  const [nValue, setN] = useState(0)
  const [zhtValue, setZht] = useState(0)
  const [vValue, setV] = useState(0)
  const [elyValue, setEly] = useState(0)
  const [tzwValue, setTzw] = useState(0)
  const [fikValue, setFik] = useState(0)
  const [tValue, setT] = useState(0)
  const [zqValue, setZq] = useState(0)
  const [npValue, setNp] = useState(0)
  const [mjValue, setMj] = useState(0)
  const [kgValue, setKg] = useState(0)
  const [oyValue, setOy] = useState(0)
  const [intValue, setInt] = useState(0)
  const [obValue, setOb] = useState(0)
  const [acmValue, setAcm] = useState(0)
  const [qqValue, setQq] = useState(0)
  const [xValue, setX] = useState(0)
  const [xlcValue, setXlc] = useState(0)
  const [sValue, setS] = useState(0)

  const [ietOldValue, setIetOld] = useState(0)
  const [nOldValue, setNOld] = useState(0)
  const [zhtOldValue, setZhtOld] = useState(0)
  const [vOldValue, setVOld] = useState(0)
  const [elyOldValue, setElyOld] = useState(0)
  const [tzwOldValue, setTzwOld] = useState(0)
  const [fikOldValue, setFikOld] = useState(0)
  const [tOldValue, setTOld] = useState(0)
  const [zqOldValue, setZqOld] = useState(0)
  const [npOldValue, setNpOld] = useState(0)
  const [mjOldValue, setMjOld] = useState(0)
  const [kgOldValue, setKgOld] = useState(0)
  const [oyOldValue, setOyOld] = useState(0)
  const [intOldValue, setIntOld] = useState(0)
  const [obOldValue, setObOld] = useState(0)
  const [acmOldValue, setAcmOld] = useState(0)
  const [qqOldValue, setQqOld] = useState(0)
  const [xOldValue, setXOld] = useState(0)
  const [xlcOldValue, setXlcOld] = useState(0)
  const [sOldValue, setSOld] = useState(0)

  const stocks = [
    { key: 'IET', value: ietValue, oldValue: ietOldValue },
    { key: 'N', value: nValue, oldValue: nOldValue },
    { key: 'ZHT', value: zhtValue, oldValue: zhtOldValue },
    { key: 'V', value: vValue, oldValue: vOldValue },
    { key: 'ELY', value: elyValue, oldValue: elyOldValue },
    { key: 'TZW', value: tzwValue, oldValue: tzwOldValue },
    { key: 'FIK', value: fikValue, oldValue: fikOldValue },
    { key: 'T', value: tValue, oldValue: tOldValue },
    { key: 'ZQ', value: zqValue, oldValue: zqOldValue },
    { key: 'NP', value: npValue, oldValue: npOldValue },
    { key: 'MJ', value: mjValue, oldValue: mjOldValue },
    { key: 'KG', value: kgValue, oldValue: kgOldValue },
    { key: 'OY', value: oyValue, oldValue: oyOldValue },
    { key: 'ITN', value: intValue, oldValue: intOldValue },
    { key: 'OB', value: obValue, oldValue: obOldValue },
    { key: 'ACM', value: acmValue, oldValue: acmOldValue },
    { key: 'QQ', value: qqValue, oldValue: qqOldValue },
    { key: 'X', value: xValue, oldValue: xOldValue },
    { key: 'XLC', value: xlcValue, oldValue: xlcOldValue },
    { key: 'S', value: sValue, oldValue: sOldValue }  
  ]

  function createWS() {
    const msg = {
      stocks: ['IET', 'N', 'ZHT', 'V', 'ELY', 'TZW', 'FIK', 'T', 'ZQ', 'NP', 'MJ', 'KG', 'OY', 'ITN', 'OB', 'ACM', 'QQ', 'X', 'XLC', 'S'], event: 'subscribe'
    }

    const webSocket = new WebSocket('ws://localhost:8080');
    webSocket.onerror = (error) => {
      console.log('WebSocket Error: ' + error);
    };

    webSocket.onclose = () => {
      console.log('Disconnected from WebSocket.');
      setTimeout(function () { createWS() }, 3000); // 3 segundos
    }

    webSocket.onopen = () => {
      console.log('WebSocket Open')
      webSocket.send(JSON.stringify(msg))
    };

    webSocket.onmessage = (event) => {
      let data = JSON.parse(event.data)
      let key = ''
      let newValue

      if (data.stocks !== undefined) {
        key = Object.keys(data.stocks)
        newValue = Object.values(data.stocks)
      }

      switch (key[0]) {
        case 'IET':
          setIet(Number(newValue))
          break
        case 'N':
          setN(Number(newValue))
          break
        case 'ZHT':
          setZht(Number(newValue))
          break
        case 'V':
          setV(Number(newValue))
          break
        case 'ELY':
          setEly(Number(newValue))
          break
        case 'TZW':
          setTzw(Number(newValue))
          break
        case 'FIK':
          setFik(Number(newValue))
          break
        case 'T':
          setT(Number(newValue))
          break
        case 'ZQ':
          setZq(Number(newValue))
          break
        case 'NP':
          setNp(Number(newValue))
          break
        case 'MJ':
          setMj(Number(newValue))
          break
        case 'KG':
          setKg(Number(newValue))
          break
        case 'OY':
          setOy(Number(newValue))
          break
        case 'ITN':
          setInt(Number(newValue))
          break
        case 'OB':
          setOb(Number(newValue))
          break
        case 'ACM':
          setAcm(Number(newValue))
          break
        case 'QQ':
          setQq(Number(newValue))
          break
        case 'X':
          setX(Number(newValue))
          break
        case 'XLC':
          setXlc(Number(newValue))
          break
        case 'S':
          setS(Number(newValue))
          break
        default:
      }
    }
  }

  useEffect(() => {
    createWS()
  }, [])

  return (
    <div>
      <div className='container d-flex justify-content-center row acoes mt-4'>
        {stocks && stocks.map((stock, index) => {
          return (
            <Acao acao={stock} key={index} />
          )
        })}
      </div>
    </div>
  )
}

export default Acoes