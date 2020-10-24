import React from 'react';

import {  BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import Projects from './pages/Projects';



function Routes (){
    return(

        <BrowserRouter>
            <Route path="/"  exact component={Landing} />
            <Route path="/projects"  exact component={Projects} />

        </BrowserRouter>

    );
}

export default Routes;