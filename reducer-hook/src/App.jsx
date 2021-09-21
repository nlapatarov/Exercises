import React, { useEffect, useState, useRef, useReducer } from "react";

function App() {
  const initialState = {
    count: 0,
    showText: true,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + 1 };
      case "toogleShowText":
        return { ...state, showText: !state.showText };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toogleShowText" });
        }}
      >
        Click here
      </button>
      {state.showText && <p>This is a text</p>}
    </>
  );
}

export default App;
