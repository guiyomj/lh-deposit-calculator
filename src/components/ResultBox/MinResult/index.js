import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { deposit, monthFee, rate } from '../../../atoms';
import { calcMin } from '../../../utils/calc';

const MinResult = () => {
  const depositValue = useRecoilValue(deposit);
  const monthFeeValue = useRecoilValue(monthFee);
  const rateValue = useRecoilValue(rate);

  const [maxMonthFee, setMaxMonthFee] = useState(0);

  useEffect(() => {
    const maxMonthFee = calcMin({ deposit: depositValue, rate: rateValue });
    setMaxMonthFee(maxMonthFee);
  }, [depositValue, monthFeeValue, rateValue]);

  return (
    <div className="result-content">
      <p>
        무보증금 기준 높아지는 월 임대료는 <b>{maxMonthFee}</b>원(총 월세 {monthFeeValue + maxMonthFee}원)
        <br />
        입니다.
      </p>
    </div>
  );
};

export default MinResult;
