import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { deposit, monthFee, rate, limit } from '../../../atoms';
import { calcMax } from '../../../utils/calc';

const MaxResult = () => {
  const depositValue = useRecoilValue(deposit);
  const monthFeeValue = useRecoilValue(monthFee);
  const rateValue = useRecoilValue(rate);
  const limitValue = useRecoilValue(limit);

  const [calcResult, setCalcResult] = useState({ deposit: 0, monthFee: 0 });
  const { deposit: maxDeposit, monthFee: minMonthFee } = calcResult;

  useEffect(() => {
    const calcMaxResult = calcMax({ monthFee: monthFeeValue, limit: limitValue, rate: rateValue });
    console.log(calcMaxResult, depositValue, limitValue, monthFeeValue, rateValue);
    setCalcResult(calcMaxResult);
  }, [depositValue, limitValue, monthFeeValue, rateValue]);

  return (
    <div className="result-content">
      <p>
        최대 전환가능 보증금은 <b>{maxDeposit}</b>원(총 보증금 {maxDeposit + depositValue}원)이고,
        <br />
        낮아지는 월 임대료는 <b>{minMonthFee}</b>원(총 월세 {monthFeeValue - minMonthFee}원)
        <br />
        입니다.
      </p>
    </div>
  );
};

export default MaxResult;
