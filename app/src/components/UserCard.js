import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const UserCard = (props) => {
    const { userId, name, number, ready } = props

    return (
        <Card key={userId}>
            <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                    {name}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                    {number}
                </Typography>
                <TextField
                    label="Estimation"
                    type="number"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="filled"
                />

                <FormControlLabel
                control={
                  <Switch
                    name="revealCard"
                    color="primary"
                  />
                }
                label="Reveal Card"
              />

            </CardContent>
        </Card>
    )
}

export default UserCard
