import React from 'react'
import MainComponent from './MainComponent'
import './Main.css'
const Main = () => {
    return (
        <div className="main_content">
            <h1>Q&A Discussions</h1>
            <MainComponent />
            <MainComponent />
            <MainComponent />
        </div>
    )
}

export default Main
