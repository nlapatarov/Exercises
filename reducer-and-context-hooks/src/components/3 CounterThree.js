import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1
        case "decrement":
            return state - 1
        case "reset":
            return initialState
        default:
            return state
    }
}

function CounterThree() {
    const [count, setCount] = useReducer(reducer, initialState)
    const [countTwo, setCountTwo] = useReducer(reducer, initialState)

    return (
        <div>
            <div>Count : {count}</div>
            <button onClick={() => setCount("increment")}>Increment</button>
            <button onClick={() => setCount("decrement")}>Decrement</button>
            <button onClick={() => setCount("reset")}>Reset</button>

            <div>
            <div>Count : {countTwo}</div>
            <button onClick={() => setCountTwo("increment")}>Increment</button>
            <button onClick={() => setCountTwo("decrement")}>Decrement</button>
            <button onClick={() => setCountTwo("reset")}>Reset</button>
            </div>
        </div>
    )
}

export default CounterThree
