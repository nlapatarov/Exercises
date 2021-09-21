import React, { useEffect, useRef, useState } from 'react'

function Test() {
    const [timer, setTimer] = useState(0)

    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)

    }, [])
    return (
        <div>
            Hook : {timer}
            <button onClick={() => clearInterval(intervalRef.current)}>Hook : {timer}</button>
        </div>
    )
}

export default Test
