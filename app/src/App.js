import React from 'react'
import './App.css'
import Store from './store/store'
import Routes from './Routes'

function App() {
    const rooms = Store.rooms
    const users = Store.users

    return (
        <div className='App'>
            <Routes />
        </div>
    )
}

export default App
