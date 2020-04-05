import React from 'react'
import './App.css'
import Store from './store/store'
import Routes from './Routes'
import Credit from './components/Credit'

const App = () => {
    const rooms = Store.rooms
    const users = Store.users

    return (
        <div className='App'>     
            <Routes/>
            <footer>
                <Credit 
                    name='Andrew Alford' 
                    LinkedIn='https://www.linkedin.com/in/andrew-alford-479155152/'
                />
            </footer>
        </div>
    )
}

export default App
