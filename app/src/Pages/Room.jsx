import React, { useState, useEffect } from 'react'
import Store, { getRealTimeUsersInRoom } from '../store/store'

const Room = () => {
    const [users, setUsers] = useState({})
    const [room, setRoom] = useState(1)
    const [currentUser, setCurrentUser] = useState(1)

    useEffect(() => {
        getRealTimeUsersInRoom(room, (error, newUsers) => {
            !error && setUsers(newUsers)
        })
    }, [room])

    console.log('users', users)

    const addUserToFireBaseTest = () => {
        Store.users.add({
            roomId: room,
            userId: currentUser,
            ready: false,
            number: '',
            joinedAt: new Date(),
        })

        console.log('clicked')
    }

    return (
        <div>
            <h1>Room</h1>
            <button onClick={addUserToFireBaseTest}>Add User</button>
        </div>
    )
}

export default Room
