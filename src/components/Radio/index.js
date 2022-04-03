import './styles.scss';

const Radio = ({ name, value, onChange, checked }) => {
  return (
    <label>
      <input name={name} type="radio" value={value} checked={checked} onChange={onChange} />
      <span>{value * 100}%</span>
    </label>
  );
};

export default Radio;
