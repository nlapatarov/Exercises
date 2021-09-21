import React, {useState} from 'react'

function Test() {
    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick={()=> setDisplay (!display)}>Toggle button</button>
            {display && <p>Some text</p>}
        </div>
    )
}

export default Test
