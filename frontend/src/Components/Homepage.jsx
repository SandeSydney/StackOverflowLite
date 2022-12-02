import React from 'react'
import logo from '../Resources/Logo.png'
import AskButton from './AskButton'
import Questionbox from './Questionbox'
import SearchBox from './SearchBox'
import user from '../Resources/user.png'
import Sidenav from './Sidenav'
import Menubutton from './Menubutton'
import Accordion from 'react-bootstrap/Accordion'
import { Link, Outlet } from 'react-router-dom'


function Homepage() {
    return (
        <div className='container-main'>
            <nav>
                <img src={logo} alt="logo" />
                <div className="links">
                    <a href='/home'>Home</a>
                    <a href='/home'>Most Upvoted</a>
                    <a href='/home'>Most Answered</a>
                </div>
                <div>
                    <div className="search-profile">
                        <SearchBox />
                        <div className="profile">
                            <Accordion defaultActiveKey={'0'}>
                                <Accordion.Header>
                                    John Doe
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Link to={'/'}>Logout</Link>
                                </Accordion.Body>
                            </Accordion>
                            <img src={user} alt="Profile pic" />
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
                    <Outlet/>
                </div>
                <div className="extra">

                </div>
            </div>
        </div>
    )
}

export default Homepage