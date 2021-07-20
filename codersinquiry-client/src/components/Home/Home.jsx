import React from 'react';
import './Home.css';
import construction from '../../images/construction.svg';

const Home = () => {
    return (
        
        <div className='home text-center'>

            <img src={construction} alt=""  style={{width: '100%'}}/>

            <img src={construction} alt="" className='home__img' style={{width: '100%'}} />

            <h1>Reduce Fluffy</h1>
            <h2>This site is under development.</h2>
        </div>
    );
};

export default Home;