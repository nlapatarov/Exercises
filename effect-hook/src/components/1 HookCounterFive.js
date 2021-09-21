import React, { useState, useEffect } from "react";

function HookCounterFive() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect - Updaiting document title");
    document.title = `You clicked ${count} times`;
  }, [count]);
  // На useEffect() подаваме втори параметър /в случая празен масив []/ в който посочваме props/state. Само и единствено ако посоченото props/state се промени, то тогава useEffect() ще се изпълни

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}

export default HookCounterFive;
