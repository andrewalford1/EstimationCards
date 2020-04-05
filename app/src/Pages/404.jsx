import React from 'react'
import Lost from '../assets/lost.svg'
import { Button } from '@material-ui/core'

export default () => (
    <div className='Page'>
        <h1>Ah Crumpets! Looks like you got yourself lost</h1>

        <img src={Lost} alt={''} />

        <Button color='primary' variant='outlined'>
            <a href='/'>Home</a>
        </Button>
    </div>
)
