import React, { useState } from 'react'
import { createRoom } from '../store/store'
import { nanoid } from 'nanoid'
import { Button, TextField } from '@material-ui/core'
import CopyButton from '../components/CopyToClipboard'

const CreateRoom = () => {
    const [roomName, setRoomName] = useState('')
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [createdRoom, setCreatedRoom] = useState('')

    const handleCreateRoom = async () => {
        const roomId = nanoid()

        // While await maybe set some sort of loading?
        const room = await createRoom({ roomId, roomName })

        setCreatedRoom(room)
    }

    const handleNameChange = (event) => {
        const name = event.target.value

        setError(!name)
        !name ? setErrorMessage('Your room needs a name') : setErrorMessage('')

        setRoomName(name)
    }

    const submitHandler = (event) => {
        // Could just create room in here as well?
        event.preventDefault()
    }

    const renderForm = () => {
        return (
            <form id='createRoom' onSubmit={submitHandler}>
                <TextField
                    id='standard-basic'
                    label='Room name'
                    onChange={handleNameChange}
                    error={error}
                    value={roomName}
                    helperText={errorMessage}
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
            <>
                <h2>Awesome!</h2>
                <p>
                    We've arranged the tables and chairs for you. Just share it
                    with your colleagues.
                </p>
                <CopyButton
                    url={`/room/${room.roomId}`}
                    text={`Copy room URL`}
                />
            </>
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
