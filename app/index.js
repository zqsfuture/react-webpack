import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router ,HashRouter,MemoryRouter, Route , Switch ,Redirect} from 'react-router-dom';
import Jspang from './jspang';
import Jspangb from './jspangb';
import Jspangc from './jspangc';
import Error from './error';
import Nav from './nav';
ReactDOM.render(
    <Router basename="demo">
        <div>
            <Nav/>
            <Switch>
                <Route exact path="/" component={Jspang} />
                <Route path="/Jspangb" component={Jspangb} />
                <Route path="/Jspangc/:param/:bbb" component={Jspangc} />
                <Redirect from="/redirect" to="/Jspangb" />
                <Route component={Error} />
            </Switch>
            
        </div>
    </Router>,
    document.getElementById("app")
)