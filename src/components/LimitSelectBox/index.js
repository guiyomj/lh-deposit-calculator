import React, { useState } from 'react';

import Radio from '../Radio';
import { limits } from '../../constants';

const LimitSelectBox = ({ onChange }) => {
  const [checked, setChecked] = useState(0);

  const handleRadioChange = (radioNo, rate) => {
    setChecked(radioNo);
    onChange(rate);
  };

  return (
    <div className="radioGroup">
      {limits.map((limit, i) => (
        <Radio name="limit" key={limit} value={limit} checked={checked === i} onChange={handleRadioChange.bind(null, i, limit)} />
      ))}
    </div>
  );
};

export default LimitSelectBox;
