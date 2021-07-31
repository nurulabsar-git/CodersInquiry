import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import Options from '../Options/Options';
// import Main from './Main/Main';
import Questions from '../Questions/Questions';
import RightCard from './RightCard/RightCard';
import QAPieChart from '../QAPieChart/QAPieChart';

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <div className='container'>
                <Options />
                <div className='row'>
                    <div className='col-md-8'>
                        {/* <Main /> */}
                        <Questions />
                    </div>
                    <div className='col-md-4'>
                        <QAPieChart />
                        <RightCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
