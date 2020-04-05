import React from 'react'
import './App.css'
import Store from './store/store'
import Routes from './Routes'
import Credit from './components/Credit'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';

const App = () => {
    const rooms = Store.rooms
    const users = Store.users

    return (
        <div className='App'>     
            <Routes/>
            <footer>

                <div className='Credits'>
                    <Credit 
                    name='Andrew' 
                    LinkedIn='https://www.linkedin.com/in/andrew-alford-479155152/'
                    />
                    <Credit 
                    name='Dan' 
                    LinkedIn='https://www.linkedin.com/in/danielbutterfield777/'
                    />

                    <IconButton color="primary" aria-label="Source Code">
                        <a href='https://github.com/andrewalford1/EstimationCards'> 
                            <GitHubIcon /> 
                        </a>
                    </IconButton>
                </div>
            </footer>
        </div>
    )
}

export default App
