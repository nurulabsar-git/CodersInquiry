import React, { useState } from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import CustomNavbar from '../CustomNavbar/CustomNavbar'
const Header = () => {
    // const [styles, setStyles] = useState(
    //     {maxWidth: '200px'}
    // );
    // var style = {
    //     maxWidth: '300px'
    // } 
    return (
        <div className='header'>
            <Navbar/> 
            <Banner />
        </div>
    );
};

export default Header;
