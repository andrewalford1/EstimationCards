import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Room from './Pages/Room';

export default () => (

    <Router>
        <Route path="/">
            <Room/>
        </Route>
    </Router>
);