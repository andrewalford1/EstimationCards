import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'

const UserCard = (props) => {
    const { name, number, ready } = props

    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                    {name}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                    {number}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default UserCard
