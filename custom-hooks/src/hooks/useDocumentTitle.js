import React from 'react'
import { useEffect } from 'react'

function useDocumentTitle(count) {
    useEffect(() => {
        document.title = `Clicked ${count}`
    }, [count])
}

export default useDocumentTitle
