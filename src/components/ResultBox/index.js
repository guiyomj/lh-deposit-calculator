import { useRecoilValue } from 'recoil';

import { currentMenuNo } from '../../atoms';
import MaxResult from './MaxResult';
import MinResult from './MinResult';
import './styles.scss';

const ResultBox = () => {
  const selectedMenuNo = useRecoilValue(currentMenuNo);

  return (
    <div className="result">
      <p className="result-title">결과</p>
      {selectedMenuNo ? <MinResult /> : <MaxResult />}
    </div>
  );
};

export default ResultBox;
