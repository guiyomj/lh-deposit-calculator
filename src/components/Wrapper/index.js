import './styles.scss';

const Wrapper = ({ children }) => {
  return (
    <div className="container">
      <h1 className="title">LH 전환보증금 계산기</h1>
      {children}
    </div>
  );
};

export default Wrapper;
