import React from 'react'
import Lost from '../assets/404_graphic.svg'

export default () => (
    <div className='Page'>
            <h1>Ah Crumpets! Looks like you got yourself lost</h1>
            <img src={Lost} 
                alt={''} 
                width={'75%'} 
                height={'75%'}
            />
    </div>
)