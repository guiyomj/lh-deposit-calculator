import { useRecoilState } from 'recoil';

import { deposit, limit, monthFee, rate } from '../../atoms';
import { depositPlaceholder, monthFeePlaceholder } from '../../constants';
import CalcTableItem from './CalcTableItem';
import './styles.scss';

const CalcTable = () => {
  const [depositValue, setDepositValue] = useRecoilState(deposit);
  const [monthFeeValue, setMonthFeeValue] = useRecoilState(monthFee);
  const [rateValue, setRateValue] = useRecoilState(rate);
  const [limitValue, setLimitValue] = useRecoilState(limit);

  const handleDeposit = ({ target }) => {
    const inputValue = +target.value;
    setDepositValue(inputValue);
  };

  const handleMonthFee = ({ target }) => {
    const inputValue = +target.value;
    setMonthFeeValue(inputValue);
  };

  const handleRate = (value) => {
    setRateValue(value);
  };

  const handleLimit = (value) => {
    setLimitValue(value);
  };

  return (
    <table className="c-table">
      <colgroup>
        <col width="90" />
        <col width="*" />
      </colgroup>
      <tbody>
        <CalcTableItem title="기본보증금" type="input" name="deposit" value={depositValue} onChange={handleDeposit} placeholder={depositPlaceholder} />
        <CalcTableItem title="기본월세" type="input" name="monthFee" value={monthFeeValue} onChange={handleMonthFee} placeholder={monthFeePlaceholder} />
        <CalcTableItem title="전환이율" type="rateRadio" name="rate" value={rateValue} onChange={handleRate} />
        <CalcTableItem title="최대전환비율" type="limitRadio" name="limit" value={limitValue} onChange={handleLimit} />
      </tbody>
    </table>
  );
};

export default CalcTable;
