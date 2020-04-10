import React, { useState } from 'react'
import { createRoom } from '../store/store'
import { nanoid } from 'nanoid'
import { Button, TextField } from '@material-ui/core'

const CreateRoom = () => {
    const [roomName, setRoomName] = useState('')
    const [error, setError] = useState('')

    const handleCreateRoom = async () => {
        const roomId = nanoid()
        await createRoom({ roomId, roomName })
    }

    const handleNameChange = (event) => {
        const name = event.target.value

        !name ? setError('Your room needs a name') : setError('')

        setRoomName(name)
    }

    return (
        <div className='fakeCenterSection'>
            <div className='whitePopoutBox'>
                <form id='createRoom'>
                    <TextField
                        id='standard-basic'
                        label='Room name'
                        onChange={handleNameChange}
                        error={error}
                        value={roomName}
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
            </div>
        </div>
    )
}

export default CreateRoom
