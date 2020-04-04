import React, { useState, useEffect } from 'react'
import Store, { getRealTimeUsersInRoom } from '../store/store'

const Room = () => {
    const [users, setUsers] = useState({})

    // TODO: Get room ID from URL I'm guessing
    const [room, setRoom] = useState(1)

    // TODO: Get user ID from somewhere...
    const [currentUser, setCurrentUser] = useState(1)

    useEffect(() => {
        // Updates the number of users available in the room
        getRealTimeUsersInRoom(room, (error, newUsers) => {
            !error && setUsers(newUsers)
        })
    }, [room])

    const addUserToFirebaseTest = () => {
        Store.users.add({
            roomId: room,
            userId: currentUser,
            ready: false,
            number: '',
            joinedAt: new Date(),
        })
    }

    let cards

    if (Array.isArray(users)) {
        // loop over users
        // for each user, get their name, number and ready status
        // return in a card component and pass down values
        cards = users.map((user) => {
            console.log(user)
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
