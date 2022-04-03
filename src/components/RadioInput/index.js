import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import Input from '../Input';
import { percentPlaceholder } from '../../constants';
import { currentMenuNo } from '../../atoms';

const RadioInput = ({ name, onChange, checked }) => {
  const [inputValue, setInputValue] = useState(0);
  const selectedMenu = useRecoilValue(currentMenuNo);

  const handleRadio = () => {
    onChange(1, inputValue);
  };

  const handleInputEtc = ({ target }) => {
    const inputValue = +target.value;
    setInputValue(inputValue);
    checked && onChange(1, inputValue / 100);
  };

  useEffect(() => {
    onChange(0);
    setInputValue(0);
  }, [selectedMenu]);

  return (
    <div className="d-flex">
      <label>
        <input name={`etc-${name}`} value="etc" type="radio" checked={checked} onChange={handleRadio} />
        <span>기타</span>
      </label>
      <Input name={`etc-${name}`} value={inputValue} disabled={!checked} placeholder={percentPlaceholder} onChange={handleInputEtc} />
      <span>%</span>
    </div>
  );
};

export default RadioInput;
