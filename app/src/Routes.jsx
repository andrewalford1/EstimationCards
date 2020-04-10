import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Room from './Pages/Room'
import DynamicRoom from './Pages/DynamicRoom'
import LandingPage from './Pages/LandingPage'
import CreateRoom from './Pages/CreateRoom'
import JoinRoom from './Pages/JoinRoom'
import UnknownPage from './Pages/404'

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path='/'>
                <LandingPage />
            </Route>

            <Route path='/create'>
                <CreateRoom />
            </Route>

            <Route path='/join'>
                <JoinRoom />
            </Route>

            <Route path='/randomRoomID'>
                <Room />
            </Route>

            <Route path='/room/:id'>
                <DynamicRoom />
            </Route>

            <Route>
                <UnknownPage />
            </Route>
        </Switch>
    </Router>
)

export default Routes
