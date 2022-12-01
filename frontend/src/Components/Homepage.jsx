import React from 'react'
import logo from '../Resources/Logo.png'
import menu from '../Resources/menubar.png'
import AskButton from './AskButton'
import Questionbox from './Questionbox'
import QuestionDiv from './Questionbox'
import SearchBox from './SearchBox'


function Homepage() {
    return (
        <div className='container'>
            <nav>
                <img src={logo} alt="logo" />
                <img className='action-button' src={menu} alt="menu bar" />
            </nav>
            <div className="action-nav">
                <AskButton />
                <SearchBox />
            </div>
            <div className="log-content main-content">
                <Questionbox />
                <Questionbox />
                <Questionbox />
                <Questionbox />
                <Questionbox />
                <Questionbox />
            </div>
        </div>
    )
}

export default Homepage