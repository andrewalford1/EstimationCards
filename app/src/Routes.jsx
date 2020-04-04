import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Host from './Pages/Host';

export default () => (

    <Router>
        <Route path="/">
            <Host/>
        </Route>
    </Router>
);