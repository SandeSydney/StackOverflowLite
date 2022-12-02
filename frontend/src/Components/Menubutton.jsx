import React from 'react'
import menu from '../Resources/menubar.png'
import Dropdown from 'react-bootstrap/Dropdown'

function Menubutton() {
    return (
        <Dropdown className='menubutton'>
            <Dropdown.Toggle id="dropdown-basic">
                <img className='action-button navimg' src={menu} alt="menu bar" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href='/'>Home</Dropdown.Item>
                <Dropdown.Item href='/'>Most Upvoted</Dropdown.Item>
                <Dropdown.Item href='/'>Most Answered</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Menubutton