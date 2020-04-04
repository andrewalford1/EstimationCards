import React from 'react'
import {Button} from '@material-ui/core'

export default () => (
    <div className='Page'>
        <h1>
            Welcome
        </h1>
        <p>
        In Scrum Projects, Estimation is done by the entire team during 
        Sprint Planning Meeting. The objective of the Estimation would 
        be to consider the User Stories for the Sprint by Priority and
        by the Ability of the team to deliver during the 
        Time Box of the Sprint.
        </p>
        <p>
        This application has been created enable software teams to 
        effortlessly estimate backlog items in a virtual environment.
        </p>
        
        <Button color='primary' variant='outlined'>
            <a href='/'><a href='/RandomRoomId'>Start Estimating</a></a>
        </Button>
    </div>
)
