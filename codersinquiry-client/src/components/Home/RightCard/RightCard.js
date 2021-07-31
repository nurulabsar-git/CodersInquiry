import React from 'react';
import './RightCard.css';
import HotTopics from './HotTopics';

const RightCard = () => {
    return (
        <div className='rightCard mt-3'>
            <h2>Hot Topics</h2>
            <HotTopics />
            <HotTopics />
            <HotTopics />
            <HotTopics />
        </div>
    );
};

export default RightCard;
