import React, { useState, useEffect } from 'react'
import Store, { getRealTimeUsersInRoom } from '../store/store'
import UserCard from '../components/UserCard'
import CopyToClipboard from '../components/CopyToClipboard'
import { nanoid } from 'nanoid'

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
            name: 'RandomName',
            roomId: room,
            userId: nanoid(),
            ready: false,
            number: '',
            joinedAt: new Date(),
        })
    }

    if (Array.isArray(users)) {
        cards = users.map((user) => {
            const { userId, name, number, ready } = user
            return UserCard({ userId, name, number, ready })
        })
    }

    return (
        <div>
            <h1>Room</h1>
            {cards}
            {/* TODO: This should be removed as it was purely for testing. */}
            <button onClick={addUserToFirebaseTest}>Add User</button>
            <CopyToClipboard url={'pickle Rick'}/>
        </div>
    )
}

export default Room
