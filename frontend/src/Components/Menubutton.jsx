import React from 'react'
import menu from '../Resources/menubar.png'
import Dropdown from 'react-bootstrap/Dropdown'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserLoggedIn, logoutUser } from '../Features/usersSlice'

function Menubutton() {

    const isLoggedIn = useSelector(getUserLoggedIn)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = ()=>{
        dispatch(logoutUser())
    }

    return (
        <Dropdown className='menubutton'>
            <Dropdown.Toggle id="dropdown-basic">
                <img className='action-button navimg' src={menu} alt="menu bar" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>
                    <Link to={""}>Home</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Link to={"most-upvoted"}>Most Upvoted</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Link to={"most-answered"}>Most Answered</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Link to={"/"} onClick={handleLogout}>Logout</Link>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Menubutton