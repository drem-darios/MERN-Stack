import React from 'react';
import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Users from "./users/pages/Users";
import NewPlace from "./places/NewPlace/NewPlace";

const App = () => {
    return (<Router>
        <Switch>
            <Route path="/" exact>
                <Users/>
            </Route>
            <Route path="/places/new" exact>
                <NewPlace/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    </Router>);
};

export default App;
