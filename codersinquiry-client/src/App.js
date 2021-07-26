import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import CustomNavbar from './components/CustomNavbar/CustomNavbar';
import Courses from './components/Courses/Courses';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Header />
                    {/* customNavbar just for testing purpose */}
                    {/* <CustomNavbar></CustomNavbar> */}
                    <Home />
                </Route>
                <Route path="/login">
                    <Navbar />
                    <Login />
                </Route>
                <Route path="/courses">
                    <Courses/>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;