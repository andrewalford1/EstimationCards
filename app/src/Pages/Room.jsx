import React, { useState, useEffect } from 'react'
import Store, { getRealTimeUsersInRoom } from '../store/store'
import UserCard from '../components/UserCard'

const Room = () => {
    const [users, setUsers] = useState({})

    // TODO: Get room ID from URL I'm guessing
    const [room, setRoom] = useState(1)

    // TODO: Get user ID from somewhere...
    const [currentUser, setCurrentUser] = useState(1)

    let cards

    useEffect(() => {
        // Updates the number of users available in the room
        getRealTimeUsersInRoom(room, (error, newUsers) => {
            !error && setUsers(newUsers)
        })
    }, [room])

    const addUserToFirebaseTest = () => {
        Store.users.add({
            name: 'Dandrew',
            roomId: room,
            userId: currentUser,
            ready: false,
            number: '',
            joinedAt: new Date(),
        })
    }

    if (Array.isArray(users)) {
        cards = users.map((user) => {
            const { number, ready, name } = user
            return UserCard({ name, number, ready })
        })
    }

    return (
        <div>
            <h1>Room</h1>
            {cards}
            <button onClick={addUserToFirebaseTest}>Add User</button>
        </div>
    )
}

export default Room
