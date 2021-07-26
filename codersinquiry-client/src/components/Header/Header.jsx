import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import CustomNavbar from '../CustomNavbar/CustomNavbar'
const Header = () => {
    var style = {
        width: '300px'
    } 
    return (
        <div className='header'>
               { style ? <CustomNavbar/> :<Navbar/> }
            <Banner />
        </div>
    );
};

export default Header;
