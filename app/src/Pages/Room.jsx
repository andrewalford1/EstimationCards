import React, { useState, useEffect } from 'react'
import Store, { getRealTimeUsersInRoom } from '../store/store'

const Room = () => {
    const [users, setUsers] = useState({})
    const [room, setRoom] = useState(1)

    useEffect(() => {
        getRealTimeUsersInRoom(room, (error, newUsers) => {
            !error && setUsers(newUsers)
        })
    }, [room])

    console.log('users', users)
    return (
        <div>
            <h1>Room</h1>
        </div>
    )
}

export default Room
