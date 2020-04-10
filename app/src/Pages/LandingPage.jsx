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
                <h2>Create a room</h2>
                <p>
                    You can create a room for your collegues and begin
                    estimating stories quickly and easily!
                </p>
                <Button variant='contained' color='default'>
                    <a href='/create'>Create</a>
                </Button>
            </div>

            <div>
                <h2>Join a room</h2>
                <p>
                    Do you already know a room has been set up? Well, you can
                    join it by entering the URL here too!
                </p>
                <Button variant='contained' color='default'>
                    <a href='/join'>Join</a>
                </Button>
            </div>
        </div>
    </div>
)
