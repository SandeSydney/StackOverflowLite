import React from 'react'
import logo from '../Resources/Logo.png'
import AskButton from './AskButton'
import Questionbox from './Questionbox'
import SearchBox from './SearchBox'
import user from '../Resources/user.png'
import Sidenav from './Sidenav'
import Menubutton from './Menubutton'


function Homepage() {
    return (
        <div className='container-main'>
            <nav>
                <img src={logo} alt="logo" />
                <div className="links">
                    <a href='/'>Home</a>
                    <a href='/'>Most Upvoted</a>
                    <a href='/'>Most Answered</a>
                </div>
                <div>
                    <div className="search-profile">
                        <SearchBox />
                        <div className="profile">
                            <img src={user} alt="Profile pic" />
                            <p>John Doe</p>
                        </div>
                    </div>
                    <Menubutton />
                </div>
            </nav>
            <div className="action-nav">
                <AskButton />
                <SearchBox />
            </div>
            <div className='home-display'>
                <div className="side-nav">
                    <Sidenav />
                </div>
                <div className="main-content">
                    <Questionbox />
                    <Questionbox />
                    <Questionbox />
                    <Questionbox />
                    <Questionbox />
                    <Questionbox />
                    <Questionbox />
                    <Questionbox />
                    <Questionbox />
                    <Questionbox />
                    <Questionbox />
                </div>
                <div className="extra">

                </div>
            </div>
        </div>
    )
}

export default Homepage