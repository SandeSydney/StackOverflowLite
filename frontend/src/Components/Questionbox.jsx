import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import userimg from '../Resources/user.png'

function Questionbox({ question }) {
  const navigate = useNavigate()

  const viewAnswers = ()=>{
    navigate("/home/answers")
  }
  return (
    <>
      <div type='button' className='question-box'>
        <div className="user-details">
          <img src={userimg} alt="user profile pic" />
          <p>{question.username}</p>
        </div>
        <div className="qtnAns">
          <p className='question'>
            {question.question}
          </p>
          <p className='subject'>
            Subject: {question.subject}
          </p>
          <button className='answer-link' onClick={viewAnswers}>Answers (3)</button>
        </div>
      </div>
    </>
  )
}

export default Questionbox