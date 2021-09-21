import React, {useState, useEffect} from 'react'

function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e) => {
        console.log("Mouse event");
        setX(e.clientX)
        setY(e.clientY)
    } 

    useEffect(()=>{
        console.log("useEffect called")
        window.addEventListener("mousemove", logMousePosition)
        // С подаване на празен масив [] като втори параметър на функцията useEffect() казваме, че искаме useEffect() да се извика само веднъж при първоначалното изобразяване /визуализиране/ на компонента

        return () => {
            console.log("Component unmounting code")
            window.removeEventListener("mousemove", logMousePosition)
        }
    }, [])
    
    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default HookMouse
