import React from 'react'
import HotTopics from './HotTopics'
import './RightCard.css';
const RightCard = () => {
    return (
        <div className="right_card">
            <h1>Hot Topics</h1>
            <HotTopics />
            <HotTopics />
            <HotTopics />
            <HotTopics />
        </div>
    )
}

export default RightCard
