import React from 'react'
import './App.css'
import Store from './store/store'
import Routes from './Routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

function App() {
    const rooms = Store.rooms
    const users = Store.users

    return (
        <div className='App'>     
            <nav className='SideBar'>
                <ul>
                    <li>
                        <a href='/'>
                            <i>
                                <FontAwesomeIcon icon={faHome} size={'lg'}/>
                            </i>
                        </a>
                    </li>
                </ul>
            </nav>

            <div className='Page'>
                <Routes/>
            </div>
        </div>
    )
}

export default App
