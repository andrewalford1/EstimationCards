import React from 'react'
import Lost from '../assets/lost.svg'

export default () => (
    <div>
        <header>
            <h1>404 - Go the fudge home</h1>
        </header>
        <img src={Lost} 
             alt={''} 
             width={'50%'} 
             height={'50%'}
        />
    </div>
)