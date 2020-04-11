import React, { useState, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { getRealTimeUsersInRoom } from '../store/store'
import UserCard from '../components/UserCard';
import EstimationCard from '../components/EstimationCard'
import Grid from '@material-ui/core/Grid';

const DynamicRoom = () => {
    const roomId = useRouteMatch('/room/:id').params.id

    const [room, setRoom] = useState(roomId)
    const [users, setUsers] = useState([])

    // Cards which will be displayed in the room
    let cards

    useEffect(() => {
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

    return (
        <div>
            You are in room {room}
            {cards}
            <Grid container spacing={1}>
                <Grid container item xs={12}>
                    <EstimationCard/>
                    <EstimationCard/>
                    <EstimationCard/>
                </Grid>
                <Grid container item xs={12}>
                    <EstimationCard/>
                    <EstimationCard/>
                    <EstimationCard/>
                </Grid>
                <Grid container item xs={12}>
                    <EstimationCard/>
                    <EstimationCard/>
                    <EstimationCard/>
                </Grid>
            </Grid>
        </div>
    )
}

export default DynamicRoom
