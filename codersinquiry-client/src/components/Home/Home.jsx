import React from 'react';
import './Home.css';
import construction from '../../images/construction.svg';
import Main from './Main/Main';
import RightCard from './RightCard';
const Home = () => {
    return (
        <div className="container home d-flex">
            <div className='col-md-9'>
                <Main />
                {/* <img src={construction} alt="" className='home__img' style={{width: '50%'}} />

                <h1>Reduce Fluffy</h1>
                <h2>This site is under development.</h2> */}
            </div>
            <div className="col-md-3">
                <RightCard />
            </div>
        </div>
    );
};

export default Home;