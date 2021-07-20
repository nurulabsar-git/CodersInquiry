import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';

import Header from './components/Header/Header';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;