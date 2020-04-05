import React, { useState, useEffect } from 'react'
import Store, {
    getRealTimeUsersInRoom,
    createUser,
    createRoom,
} from '../store/store'
import UserCard from '../components/UserCard'
import CopyToClipboard from '../components/CopyToClipboard'
import { nanoid } from 'nanoid'

const Room = () => {
    const [users, setUsers] = useState([])
    // TODO: Get room ID from URL I'm guessing
    const [room, setRoom] = useState(1)
    // TODO: Get user ID from somewhere...
    const [currentUser, setCurrentUser] = useState({})

    // Cards which are displayed in the room (for each respective user)
    let cards

    useEffect(() => {
        // Updates the number of users available in the room
        getRealTimeUsersInRoom(room, (error, newUsers) => {
            !error && setUsers(newUsers)
        })
    }, [room])

    // Map over each of the users in the room and create a Card for each
    // which will display their name and their chosen number
    if (Array.isArray(users)) {
        cards = users.map((user) => {
            const { userId, name, number, ready } = user

            return UserCard({ userId, name, number, ready })
        })
    }

    const createFakeUserForTesting = async () => {
        // name, roomId, userId, ready, number
        const fakeUser = {
            name: 'Bob Ross',
            roomId: nanoid(),
            userId: nanoid(),
            ready: false,
            number: 7,
        }

        const user = await createUser(fakeUser)

        // TODO: Create an error to say there was an issue creating your user
        user.userId != null && setCurrentUser(user)
    }

    const createFakeRoomForTesting = () => {
        const fakeRoom = { roomId: nanoid() }

        createRoom(fakeRoom)
    }

    return (
        <div>
            <h1>Room</h1>
            {cards}
            {/* TODO: This should be removed as it was purely for testing. */}
            <button onClick={createFakeUserForTesting}>Create User</button>
            <button onClick={createFakeRoomForTesting}>Create Room</button>
            <CopyToClipboard url={'Room Invitation URL'} />
        </div>
    )
}

export default Room
