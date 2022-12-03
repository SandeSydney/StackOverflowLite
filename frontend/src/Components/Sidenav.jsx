import React from 'react'
import { useNavigate } from 'react-router-dom'

function Sidenav() {
    const navigate = useNavigate()

    const askquestion = ()=>{
        navigate("/home/ask-question")
    }
    return (
        <>
            <button className='homepage-btn' >
                My Questions
            </button>
            <button className='homepage-btn' onClick={askquestion}>
                Ask Question
            </button>
        </>
    )
}

export default Sidenav