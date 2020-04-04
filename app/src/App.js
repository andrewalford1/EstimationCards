import React from 'react'
import './App.css'
import Store from './store/store'

function App() {
    const rooms = Store.rooms
    const numbers = Store.numbers

    return (
        <div className='App'>
            <h1>Estimation Station</h1>
        </div>
    )
}

export default App
