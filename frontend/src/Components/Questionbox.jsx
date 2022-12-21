import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import userimg from '../Resources/user.png'

function Questionbox({ question_id, username, user_id, subject, question_date, question }) {

  const question_data = {
    question_id: `${question_id}`,
    username: `${username}`,
    user_id: `${user_id}`,
    subject: `${subject}`,
    question_date: `${question_date}`,
    question: `${question}`
  }

  const navigate = useNavigate()

  const viewAnswers = () => {
    navigate(`/home/question/${question_data.question_id}/answers`, { state: question_data })
  }
  return (
    <>
      <div type='button' className='question-box'>
        <div className="user-details">
          <img src={userimg} alt="user profile pic" />
          <p>{question_data.username}</p>
        </div>
        <div className="qtnAns">
          <p className='question'>
            {question_data.question}
          </p>
          <p className='subject'>
            Subject: {question_data.subject}
          </p>
          <button className='answer-link' onClick={viewAnswers}>Answers (3)</button>
        </div>
      </div>
    </>
  )
}

export default Questionbox