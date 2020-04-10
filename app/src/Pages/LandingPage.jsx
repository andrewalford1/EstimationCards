import React from 'react'
import Remote from '../assets/remote.svg'
import { Button } from '@material-ui/core'

export default () => (
    <div className='landingPage'>
        <h1>Welcome</h1>

        <div className='introText'>
            <p>
                In Scrum Projects, Estimation is done by the entire team during
                Sprint Planning Meeting. The objective of the Estimation would
                be to consider the User Stories for the Sprint by Priority and
                by the Ability of the team to deliver during the Time Box of the
                Sprint.
            </p>
            <p>
                This application has been created enable software teams to
                effortlessly estimate backlog items in a virtual environment
                when remote working.
            </p>
        </div>

        <div className='buttonChoices'>
            <Button variant='contained' color='primary'>
                <a href='/RandomRoomId'>Make a room</a>
            </Button>

            <Button variant='contained' color='primary'>
                <a href='/RandomRoomId'>Join a room</a>
            </Button>
        </div>

        <img src={Remote} alt={'Woman sitting at her desk'} />
    </div>
)
