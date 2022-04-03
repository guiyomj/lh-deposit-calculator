import { useState } from 'react';
import { useRecoilValue } from 'recoil';

import { currentMenuNo } from '../../atoms';
import Radio from '../Radio';
import RadioInput from '../RadioInput';
import { rates } from '../../constants';

const RateSelectBox = ({ onChange }) => {
  const [checked, setChecked] = useState(0);
  const selectedMenu = useRecoilValue(currentMenuNo);

  const rate = rates[selectedMenu];

  const handleRadioChange = (radioNo, inputRate) => {
    const newRate = inputRate || rate;
    setChecked(radioNo);
    onChange(newRate);
  };

  return (
    <div className="radioGroup">
      <Radio name="rate" key={rate} value={rate} checked={checked === 0} onChange={handleRadioChange.bind(null, 0, rate)} />
      <RadioInput name="rate" checked={checked === 1} onChange={handleRadioChange} />
    </div>
  );
};

export default RateSelectBox;
