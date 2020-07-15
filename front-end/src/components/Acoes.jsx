import React, { useState, useEffect } from 'react'
import Acao from './Acao'
import '../styles/Acoes.css'

require("dotenv/config")

const params = {
  URL: process.env.REACT_APP_URL,
  PORT: process.env.REACT_APP_PORT
}

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
    const url = params.URL === undefined ? 'ws://localhost:8080' : params.URL + ':' + params.PORT;
    
   
    const webSocket = new WebSocket(url);
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
          arrEit[0] = arrEit[1]
          arrEit[1] = newValue
          setIetOld(Number(arrEit[0]))
          setIet(Number(newValue))
          break
        case 'N':
          arrN[0] = arrN[1]
          arrN[1] = newValue
          setNOld(Number(arrN[0]))
          setN(Number(newValue))
          break
        case 'ZHT':
          arrZht[0] = arrZht[1]
          arrZht[1] = newValue
          setZhtOld(Number(arrZht[0]))
          setZht(Number(newValue))
          break
        case 'V':
          arrV[0] = arrV[1]
          arrV[1] = newValue
          setVOld(Number(arrV[0]))
          setV(Number(newValue))
          break
        case 'ELY':
          arrEly[0] = arrEly[1]
          arrEly[1] = newValue
          setElyOld(Number(arrEly[0]))
          setEly(Number(newValue))
          break
        case 'TZW':
          arrTzw[0] = arrTzw[1]
          arrTzw[1] = newValue
          setTzwOld(Number(arrTzw[0]))
          setTzw(Number(newValue))
          break
        case 'FIK':
          arrFik[0] = arrFik[1]
          arrFik[1] = newValue
          setFikOld(Number(arrFik[0]))
          setFik(Number(newValue))
          break
        case 'T':
          arrT[0] = arrT[1]
          arrT[1] = newValue
          setTOld(Number(arrT[0]))
          setT(Number(newValue))
          break
        case 'ZQ':
          arrZq[0] = arrZq[1]
          arrZq[1] = newValue
          setZqOld(Number(arrZq[0]))
          setZq(Number(newValue))
          break
        case 'NP':
          arrNp[0] = arrNp[1]
          arrNp[1] = newValue
          setNpOld(Number(arrNp[0]))
          setNp(Number(newValue))
          break
        case 'MJ':
          arrMj[0] = arrMj[1]
          arrMj[1] = newValue
          setMjOld(Number(arrMj[0]))
          setMj(Number(newValue))
          break
        case 'KG':
          arrKg[0] = arrKg[1]
          arrKg[1] = newValue
          setKgOld(Number(arrKg[0]))
          setKg(Number(newValue))
          break
        case 'OY':
          arrOy[0] = arrOy[1]
          arrOy[1] = newValue
          setOyOld(Number(arrOy[0]))
          setOy(Number(newValue))
          break
        case 'ITN':
          arrInt[0] = arrInt[1]
          arrInt[1] = newValue
          setIntOld(Number(arrInt[0]))
          setInt(Number(newValue))
          break
        case 'OB':
          arrOb[0] = arrOb[1]
          arrOb[1] = newValue
          setObOld(Number(arrOb[0]))
          setOb(Number(newValue))
          break
        case 'ACM':
          arrAcm[0] = arrAcm[1]
          arrAcm[1] = newValue
          setAcmOld(Number(arrAcm[0]))
          setAcm(Number(newValue))
          break
        case 'QQ':
          arrQq[0] = arrQq[1]
          arrQq[1] = newValue
          setQqOld(Number(arrQq[0]))
          setQq(Number(newValue))
          break
        case 'X':
          arrX[0] = arrX[1]
          arrX[1] = newValue
          setXOld(Number(arrX[0]))
          setX(Number(newValue))
          break
        case 'XLC':
          arrXlc[0] = arrXlc[1]
          arrXlc[1] = newValue
          setXlcOld(Number(arrXlc[0]))
          setXlc(Number(newValue))
          break
        case 'S':
          arrS[0] = arrS[1]
          arrS[1] = newValue
          setSOld(Number(arrS[0]))
          setS(Number(newValue))
          break
        default:
      }
    }
  }

  var arrEit = [0, 0]
  var arrN = [0, 0]
  var arrZht = [0, 0]
  var arrV = [0, 0]
  var arrEly = [0, 0]
  var arrTzw = [0, 0]
  var arrFik = [0, 0]
  var arrT = [0, 0]
  var arrZq = [0, 0]
  var arrNp = [0, 0]
  var arrMj = [0, 0]
  var arrKg = [0, 0]
  var arrOy = [0, 0]
  var arrInt = [0, 0]
  var arrOb = [0, 0]
  var arrAcm = [0, 0]
  var arrQq = [0, 0]
  var arrX = [0, 0]
  var arrXlc = [0, 0]
  var arrS = [0, 0]


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