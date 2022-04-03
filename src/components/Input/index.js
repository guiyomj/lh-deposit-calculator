import './styles.scss';

const Input = ({ name, value, onChange, placeholder, disabled = false }) => {
  return <input type="number" id={name} name={name} value={value || ''} onChange={onChange} placeholder={placeholder} disabled={disabled} />;
};

export default Input;
