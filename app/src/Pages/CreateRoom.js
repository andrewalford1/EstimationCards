import React, { useState } from 'react'
import { createRoom } from '../store/store'
import { nanoid } from 'nanoid'
import { Button, TextField } from '@material-ui/core'

const CreateRoom = () => {
    const [roomName, setRoomName] = useState('')
    const [error, setError] = useState('')
    const [createdRoom, setCreatedRoom] = useState('')

    const handleCreateRoom = async () => {
        const roomId = nanoid()

        // While await maybe set some sort of loading?
        const room = await createRoom({ roomId, roomName })

        setCreatedRoom(room)
    }

    const handleNameChange = (event) => {
        const name = event.target.value

        !name ? setError('Your room needs a name') : setError('')

        setRoomName(name)
    }

    const renderForm = () => {
        return (
            <form id='createRoom'>
                <TextField
                    id='standard-basic'
                    label='Room name'
                    onChange={handleNameChange}
                    error={error}
                    value={roomName}
                    helperText={error}
                />
                <Button
                    variant='contained'
                    color='default'
                    onClick={handleCreateRoom}
                    disabled={error && error}
                >
                    Create Room
                </Button>
            </form>
        )
    }

    const renderRouteToRoom = (room) => {
        return (
            <div>
                <Button variant='contained' color='default'>
                    <a href={`/room/${room.roomId}`}>Join {room.roomName}</a>
                </Button>
            </div>
        )
    }
    return (
        <div className='fakeCenterSection'>
            <div className='whitePopoutBox'>
                {createdRoom ? renderRouteToRoom(createdRoom) : renderForm()}
            </div>
        </div>
    )
}

export default CreateRoom
