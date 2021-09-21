import logo from './logo.svg';
import './App.css';
import HookCounterFive from './components/1 HookCounterFive';
import HookMouse from './components/2 HookMouse';
import MouseContainer from './components/3 MouseContainer';
import IntervalHookCounter from './components/4 IntervalHookCounter';
import DataFetching from './components/5 DataFetching';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      {/* <HookCounterFive /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalHookCounter /> */}
      <DataFetching />
      {/* <Test /> */}
    </div>
  );
}

export default App;
