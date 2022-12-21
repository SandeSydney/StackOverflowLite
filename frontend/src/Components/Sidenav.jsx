import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMyQuestions } from '../Features/questionsSlice'
import { changePage } from '../Features/usersSlice'

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
    return (
        <>
            <button className='homepage-btn' onClick={myQuestions}>
                My Questions
            </button>
            <button className='homepage-btn' onClick={askquestion}>
                Ask Question
            </button>
        </>
    )
}

export default Sidenav