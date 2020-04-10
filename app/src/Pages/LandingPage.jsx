import React from 'react'
import Remote from '../assets/remote.svg'
import { Button } from '@material-ui/core'

export default () => (
    <div className='landingPage'>
        <h1>Welcome</h1>

        <div className='introText'>
            <p>
                A flexible tool to provide quick estimation sessions, no
                downloads and no tedious logins.
            </p>
            <p>
                In Scrum Projects, Estimation is done by the entire team during
                Sprint Planning Meeting. The objective of the Estimation would
                be to consider the User Stories for the Sprint by Priority and
                by the Ability of the team to deliver during the Time Box of the
                Sprint.
            </p>
        </div>

        <div className='buttonChoices'>
            <div>
                <p>
                    You can create a room for your collegues and begin
                    estimating stories quickly and easily!
                </p>

                <Button variant='contained' color='primary'>
                    <a href='/RandomRoomId'>Create a room</a>
                </Button>
            </div>

            <div>
                <p>
                    Do you already know a room has been set up? Well, you can
                    join it by entering the URL here too!
                </p>
                <Button variant='contained' color='primary'>
                    <a href='/RandomRoomId'>Join a room</a>
                </Button>
            </div>
        </div>

        <img src={Remote} alt={'Woman sitting at her desk'} />
    </div>
)
