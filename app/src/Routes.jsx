import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Room from './Pages/Room';
import LandingPage from './Pages/LandingPage';

export default () => (

    <Router>
        <Switch>
            <route exact path='/'>
                <LandingPage/>
            </route>
            
            <Route path="/randomRoomID">
                <Room/>
            </Route>
        </Switch>
    </Router>
);