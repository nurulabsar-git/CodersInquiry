import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';

const Header = () => {
    return (
        <div className='header'>
            <Navbar />
            <Banner />
            <h1>Monsur</h1>
        </div>
    );
};

export default Header;
