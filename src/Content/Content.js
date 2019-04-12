import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Equipment from './Equipment';
import Map from './Map';
import Skills from './Skills';
import Stats from './Stats';
import Summary from './Summary';
import Tasks from './Tasks';

const Content = () => {
    return (
        <Switch>
            <Route exact path="/" component={Summary}/>
            <Route path="/summary" component={Summary}/>
            <Route path="/equipment" component={Equipment}/>
            <Route path="/map" component={Map}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/stats" component={Stats}/>
            <Route path="/tasks" component={Tasks}/>
        </Switch>
    );
};

export default Content;