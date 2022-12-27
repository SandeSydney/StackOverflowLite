import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMyQuestions } from '../Features/questionsSlice'
import { FaPlus, FaUser, FaQuestionCircle } from "react-icons/fa"

function Sidenav() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const myQuestions = () => {
        navigate("/home/my-questions")
        dispatch(getMyQuestions())
    }

    const askquestion = () => {
        navigate("/home/ask-question")
    }

    const myProfile = () => {

    }

    return (
        <>
            <button className='homepage-btn' onClick={askquestion}>
                <FaPlus size='20px' />
                Ask Question
            </button>
            <button className='homepage-btn' onClick={myQuestions}>
                <FaQuestionCircle size='20px'/>
                My Questions
            </button>
            <button className='homepage-btn' onClick={myProfile}>
                <FaUser size='20px' />
                My Profile
            </button>
        </>
    )
}

export default Sidenav