import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';


const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
            </Switch>
            <h1>Nayemul</h1>
        </Router>
    );
};

export default App;