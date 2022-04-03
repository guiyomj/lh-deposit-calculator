import './assets/styles/App.scss';
import NavBar from './components/NavBar';
import Wrapper from './components/Wrapper';
import ResultBox from './components/ResultBox';
import CalcTable from './components/CalcTable';

const App = () => {
  return (
    <Wrapper>
      <NavBar />
      <CalcTable />
      <ResultBox />
    </Wrapper>
  );
};

export default App;
