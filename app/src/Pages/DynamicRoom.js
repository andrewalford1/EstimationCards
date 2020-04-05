import React, { useState, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'

const DynamicRoom = () => {
    const roomId = useRouteMatch('/room/:id').params.id
    const [currentRoom, setCurrentRoom] = useState()

    useEffect(() => {
        setCurrentRoom(roomId)
    }, [])

    return <div>You are in room {roomId} </div>
}

export default DynamicRoom
