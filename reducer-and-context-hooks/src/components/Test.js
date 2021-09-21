import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}

const reducer = (currentState, action) => {
    switch (action.type) {
        case "increment":
            return { ...currentState, firstCounter: currentState.firstCounter + action.value }
        case "decrement":
            return { ...currentState, firstCounter: currentState.firstCounter - action.value }
        case "increment2":
            return { ...currentState, secondCounter: currentState.secondCounter + action.value }
        case "decrement2":
            return { ...currentState, secondCounter: currentState.secondCounter - action.value }
        case "reset":
            return initialState
        default:
            return currentState
    }
}

function Test() {

    const [count, setCount] = useReducer(reducer, initialState)

    return (
        <div>
            <div>First Counter : {count.firstCounter}</div>
            <div>Second Counter : {count.secondCounter}</div>
            <button onClick={() => setCount({ type: "increment", value: 1 })}>Increment by 1</button>
            <button onClick={() => setCount({ type: "decrement", value: 1 })}>Decrement by 1</button>
            <button onClick={() => setCount({ type: "increment", value: 5 })}>Increment by 5</button>
            <button onClick={() => setCount({ type: "decrement", value: 5 })}>Decrement by 5</button>
            <button onClick={() => setCount({ type: "reset" })}>Reset</button>
        </div>
    )
}

export default Test
