import React from'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export default () => (
    <nav className='SideBar'>
        <a href='/'>
            <i>
                <FontAwesomeIcon icon={faHome} size={'lg'}/>
            </i>
        </a>
    </nav>
)