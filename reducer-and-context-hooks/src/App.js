import React, { useReducer } from "react";
import "./App.css";

import CounterOne from "./components/1 CounterOne";
import CounterTwo from "./components/2 CounterTwo";
import CounterThree from "./components/3 CounterThree";
import Test from "./components/Test";

import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import DataFetchingOne from "./components/DataFetchingOne";
import DataFetchingTwo from "./components/DataFetchingTwo";

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (currentState, action) => {
  switch (action) {
    case "increment":
      return currentState + 1;
    case "decrement":
      return currentState - 1;
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        Count : {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
        {/* <CounterOne /> */}
        {/* <CounterTwo /> */}
        {/* <CounterThree /> */}
        {/* <Test /> */}
        {/* <DataFetchingOne /> */}
        {/* <DataFetchingTwo /> */}
      </div>
    </CountContext.Provider>
  );
}

export default App;
