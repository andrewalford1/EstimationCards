import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Room from './Pages/Room'
import LandingPage from './Pages/LandingPage'

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path='/'>
                <LandingPage />
            </Route>
            <Route path='/randomRoomID'>
                <Room />
            </Route>
        </Switch>
    </Router>
)

export default Routes
