import React from 'react';
import './Home.css';
import Main from './Main/Main';
import RightCard from './RightCard/RightCard';
const Home = () => {
    return (
        <div className="container home d-flex">
            <div className='col-md-8'>
                <Main />
            </div>
            <div className="col-md-4">
                <RightCard />
            </div>
        </div>
    );
};

export default Home;