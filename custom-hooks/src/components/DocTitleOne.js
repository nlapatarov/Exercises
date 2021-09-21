import React, {useState, useEffect} from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

function DocTitleOne() {
    const [count, setcount] = useState(0)
    const incrementCount = ()=> {
        setcount(currentCount => currentCount + 1)
    }
    useDocumentTitle(count)
    return (
        <div>
            <button onClick={incrementCount}>Count : {count}</button>
        </div>
    )
}

export default DocTitleOne
