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

    const addUserToFirebaseTest = () => {
        Store.users.add({
            roomId: room,
            userId: currentUser,
            ready: false,
            number: '',
            joinedAt: new Date(),
        })
    }

    return (
        <div>
            <h1>Room</h1>
            <button onClick={addUserToFirebaseTest}>Add User</button>
        </div>
    )
}

export default Room
