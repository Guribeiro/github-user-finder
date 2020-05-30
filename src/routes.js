import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



import Home from './pages/Home';
import Undefined from './pages/Undefined';
import UserProfile from './pages/UserProfile';

export default function Routes() {
    return (

        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/user/:id' component={UserProfile} />
                <Route path='*' component={Undefined} />
            </Switch>
        </BrowserRouter>
    );
}
