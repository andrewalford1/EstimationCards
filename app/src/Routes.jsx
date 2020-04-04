import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Room from './Pages/Room'
import LandingPage from './Pages/LandingPage'
import UnknownPage from './Pages/404'

export default () => (

    <Router>
        <Switch>
            <Route exact path='/'>
                <LandingPage/>
            </Route>
            
            <Route path="/randomRoomID">
                <Room/>
            </Route>

            <Route>
                <UnknownPage/>
            </Route>
        </Switch>
    </Router>
)