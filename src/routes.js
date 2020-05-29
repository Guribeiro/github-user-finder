import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Undefined from './pages/Undefined';

export default function Routes(){
    return (

        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/user/:id' component=''/>
                <Route path='*' component={Undefined}/>
            </Switch>
        
        </BrowserRouter>
    );
}
