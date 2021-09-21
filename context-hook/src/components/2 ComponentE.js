import React, { useContext } from 'react'
import { UserContext, ChannelContext } from '../App'
import ComponentF from './3 ComponentF'

function ComponentE() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    

    return (
        <div>
            <p>User name is {user}</p>
            <p>Channel name is {channel}</p>
            {/* <ComponentF /> */}
        </div>
    )
}

export default ComponentE
