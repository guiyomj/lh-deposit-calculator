import Input from '../../Input';
import RateSelectBox from '../../RateSelectBox';
import LimitSelectBox from '../../LimitSelectBox';

const CalcTableItem = ({ title, type, name, value, placeholder, onChange }) => {
  const renderInputItem = () => {
    if (type === 'rateRadio') return <RateSelectBox onChange={onChange} />;
    if (type === 'limitRadio') return <LimitSelectBox onChange={onChange} />;
    return <Input name={name} value={value} onChange={onChange} placeholder={placeholder} />;
  };

  return (
    <tr>
      <th>{title}</th>
      <td>{renderInputItem()}</td>
    </tr>
  );
};

export default CalcTableItem;
