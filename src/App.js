import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isEtc, setIsEtc] = useState(false)
  const [deposit, setDeposit] = useState(0)
  const [monthFee, setMonthFee] = useState(0)
  const [rate, setRate] = useState(0.06)
  const [limit, setLimit] = useState(0.6)
  const [maxDeposit, setMaxDeposit] = useState(0)
  const [minMonthFee, setMinMonthFee] = useState(0)

  const selectBtn = (e) => {
    const btn = e.target.closest('.menu-btn')
    const id = Number(btn.dataset.id)
    Array.from(document.getElementsByClassName('menu-btn')).map(
      e => e.classList.remove('selected')
    )
    btn.classList.add('selected')
    document.getElementsByClassName('content')[id].style.display = 'block'
    document.getElementsByClassName('content')[id === 1 ? 0 : 1].style.display = 'none'
  }

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
      <div className="content">
        <table className="c-table">
          <colgroup>
            <col width="90"/>
            <col width="*"/>
          </colgroup>
          <tbody>
            <tr>
              <th>기본보증금</th>
              <td><input type="number" onChange={e => setDeposit(Number(e.target.value))} placeholder="기본 보증금을 입력하세요. ex) 2000000" /></td>
            </tr>
            <tr>
              <th>기본월세</th>
              <td><input type="number" onChange={e => setMonthFee(Number(e.target.value))} placeholder="기본 월세를 입력하세요. ex) 150000" /></td>
            </tr>
            <tr>
              <th>전환이율{rate}{Number(isEtc)}</th>
              <td>
                <div className="radioGroup">
                  <label onClick={e => setRate(Number(e.target.value)) && setIsEtc(false) }>
                    <input name="rate" type="radio" value="0.06" defaultChecked /> 6%
                  </label>
                  <div className="d-flex">
                    <label onClick={() => setRate(0) && setIsEtc(true) && console.log("---",document.getElementsByClassName('etc-text')[0].value)}>
                      <input name="rate" type="radio" /> 기타
                    </label>
                    <input type="number" className="etc-text" placeholder="퍼센트(%)를 입력하세요." disabled={!isEtc && 'disabled'} onChange={e => setRate(Number(e.target.value / 100))}  />%
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
        <button className="result-btn" type="button" onClick={ () => { document.getElementsByClassName('result')[0].style.display = 'block'; setMaxDeposit(Math.floor(monthFee * limit / rate * 12 / 100000) * 100000); setMinMonthFee(maxDeposit * rate / 12) } }>결과 보기</button>
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
      </div>
      <div className="content">
        2번쨰
        <p className="result">결과</p>
      </div>
    </div>
  );
}

export default App;