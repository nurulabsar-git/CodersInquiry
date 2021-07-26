import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReadme } from '@fortawesome/free-brands-svg-icons';

const HotTopics = () => {
    return (
        <div className="d-flex align-items-baseline">
            <FontAwesomeIcon icon={faReadme} className="hotTopic_icon" />
            <Link to="/"><p>If I randomly send challenges to someone, that challenge will always go to an active user ?</p></Link>
        </div>
    )
}

export default HotTopics
