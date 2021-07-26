import React from 'react'
import { Link } from 'react-router-dom'
import './MainComponent.css'
import img from '../../../images/nayemul.jpg'
const MainComponent = () => {
    return (
        <div>
            <div className="m-2 d-flex">
                <div className="col-md-2 d-flex p-2 text-center vote_ans">
                    <div className="mx-2">
                    <Link><p>1024</p></Link>
                        <p>Votes</p>
                    </div>
                    <div>
                    <Link> <p>224</p></Link>
                        <p>Answers</p>
                    </div>
                </div>
                <div className="col-md-10 mx-2">
                    <Link to="/"><p className="questions_title">can anyone please help me with this solving this code with javascript. sample code suggest please!!</p></Link>
                    <Link><span className="tag_name">javascript</span><span className="tag_name">react</span></Link>
                </div>
            </div>
            <div className="d-flex justify-content-end profile_info">
                <div className="profile_name">
                    <Link><p>Nayemul Hasan</p></Link>
                    <p>26th july 2021, 1:36 PM </p>
                </div>
                <div className="profile_img">
                    <img src={img} alt="" />
                </div>
            </div>
            <hr />
        </div>
    )
}

export default MainComponent
