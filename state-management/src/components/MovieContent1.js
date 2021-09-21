import React, {useState} from 'react'
import Nav from './Nav'


export const UserContext = React.createContext()

function MovieContent1() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <UserContext.Provider value={count}>
                <Nav />
            </UserContext.Provider>
        </div>
    )
}

export default MovieContent1
