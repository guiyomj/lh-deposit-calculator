import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isEtc, setIsEtc] = useState(false)
  const [isEtc2, setIsEtc2] = useState(false)
  const [deposit, setDeposit] = useState(0)
  const [monthFee, setMonthFee] = useState(0)
  const [rate, setRate] = useState(0.06)
  const [rate2, setRate2] = useState(0.025)
  const [limit, setLimit] = useState(0.6)
  const [maxDeposit, setMaxDeposit] = useState(0)
  const [minMonthFee, setMinMonthFee] = useState(0)
  const [maxMonthFee, setMaxMonthFee] = useState(0)

  const selectBtn = (e) => {
    const btn = e.target.closest('.menu-btn')
    const id = Number(btn.dataset.id)
    Array.from(document.getElementsByClassName('menu-btn')).map(
      e => e.classList.remove('selected')
    )
    btn.classList.add('selected')
    Array.from(document.getElementsByClassName('result')).map(e => e.style.display = 'none')
    document.getElementsByClassName('rate')[id].style.display = 'contents'
    document.getElementsByClassName('rate')[id === 1 ? 0 : 1].style.display = 'none'
    document.getElementsByClassName('result')[id].style.display = 'block'
    document.getElementsByClassName('result')[id === 1 ? 0 : 1].style.display = 'none'
  }

  const calcMax = () => {
    setMaxDeposit(Math.floor(monthFee * limit / rate * 12 / 100000) * 100000)
    setMinMonthFee(maxDeposit * rate / 12)
  }

  const calcMin = () => {
    setMaxMonthFee(Math.floor(deposit * rate2 / 100000 / 3) * 100000 / 4)
  }

  useEffect(() => calcMax() || calcMin())

  return (
    <div className="container">
      <h1 className="title">LH 전환보증금 계산기</h1>
      <ul className="menu-list">
        <li className="menu-btn selected" data-id="0" onClick={selectBtn}>
          <b>보증금을 최대로</b>
          <br/>
          <small>(월세를 최소로)</small>
        </li>
        <li className="menu-btn" data-id="1" onClick={selectBtn}>
          <b>보증금을 최소로</b>
          <br/>
          <small>(월세를 최대로)</small>
        </li>
      </ul>
      <table className="c-table">
        <colgroup>
          <col width="90"/>
          <col width="*"/>
        </colgroup>
        <tbody>
          <tr>
            <th>기본보증금</th>
            <td><input type="number" id="deposit" onChange={e => {setDeposit(Number(e.target.value))}} placeholder="기본 보증금을 입력하세요. ex) 2000000" /></td>
          </tr>
          <tr>
            <th>기본월세</th>
            <td><input type="number" onChange={e => setMonthFee(Number(e.target.value))} placeholder="기본 월세를 입력하세요. ex) 150000" /></td>
          </tr>
          <tr className="rate">
            <th>전환이율</th>
            <td>
              <div className="radioGroup">
                <label onClick={e => setRate(Number(e.target.value)) || setIsEtc(false) }>
                  <input name="rate" type="radio" value="0.06" defaultChecked /> 6%
                </label>
                <div className="d-flex">
                  <label onClick={() => setIsEtc(true) || setRate(document.getElementsByClassName('etc-text')[0].value === ''? 0 : document.getElementsByClassName('etc-text')[0].value)}>
                    <input name="rate" type="radio" /> 기타
                  </label>
                  <input type="number" className="etc-text" placeholder="퍼센트(%)를 입력하세요." disabled={!isEtc && 'disabled'} onChange={e => setRate(Number(e.target.value / 100))}  />%
                </div>
              </div>
            </td>
          </tr>
          <tr className="rate d-none">
            <th>전환이율</th>
            <td>
              <div className="radioGroup">
                <label onClick={e => setRate2(Number(e.target.value)) || setIsEtc2(false) }>
                  <input name="rate2" type="radio" value="0.025" defaultChecked /> 2.5%
                </label>
                <div className="d-flex">
                  <label onClick={() => setIsEtc2(true) || setRate2(document.getElementsByClassName('etc-text2')[0].value === ''? 0 : document.getElementsByClassName('etc-text2')[0].value)}>
                    <input name="rate2" type="radio" /> 기타
                  </label>
                  <input type="number" className="etc-text2" placeholder="퍼센트(%)를 입력하세요." disabled={!isEtc2 && 'disabled'} onChange={e => setRate2(Number(e.target.value / 100))}  />%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>최대전환비율</th>
            <td>
              <div className="radioGroup">
                <label onClick={e => setLimit(Number(e.target.value))}>
                  <input name="limit" type="radio" value="0.6" defaultChecked /> 60%
                </label>
                <label onClick={e => setLimit(Number(e.target.value))}>
                  <input name="limit" type="radio" value="0.7" /> 70%
                </label>
                <label onClick={e => setLimit(Number(e.target.value))}>
                  <input name="limit" type="radio" value="0.8" /> 80%
                </label>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="result">
        <p></p>
        <span>결과</span>
        <div className="result-content">
          <p>
            최대 전환가능 보증금은 <b>{maxDeposit}</b>원(총 보증금 {maxDeposit + deposit}원)이고,<br />
            낮아지는 월 임대료는 <b>{minMonthFee}</b>원(총 월세 {monthFee - minMonthFee}원)<br />
            입니다.
          </p>
        </div>
      </div>
      <div className="result d-none">
        <p></p>
        <span>결과</span>
        <div className="result-content">
          <p>
            무보증금 기준 높아지는 월 임대료는 <b>{maxMonthFee}</b>원(총 월세 {monthFee + maxMonthFee}원)<br />
            입니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;