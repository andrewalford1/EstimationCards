import React from 'react'
import Lost from '../assets/lost.svg'

export default () => (
    <div>
            <h1>404 - The page you are looking for cannot be found</h1>
            <img src={Lost} 
                alt={''} 
                width={'50%'} 
                height={'50%'}
            />
    </div>
)