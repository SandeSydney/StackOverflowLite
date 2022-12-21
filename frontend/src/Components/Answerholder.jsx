import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Answerbox from './Answerbox'
import Answerform from './Answerform'
import BackButton from './BackButton'
import Questionbox from './Questionbox'

function Answerholder() {
  const location = useLocation()

  console.log(location.state);

  const navigate = useNavigate()

  const question_data = location.state

  const handleBack = () => {
    navigate("/home")
  }
  return (
    <>
      <BackButton handleBack={handleBack} />
      <Questionbox
        question={location.state.question}
        question_id={location.state.question_id}
        username={location.state.username}
        user_id={location.state.user_id}
        subject={location.state.subject}
        question_date={location.state.question_date} />
      <Answerform />
      <Answerbox />
      <Answerbox />
      <Answerbox />
    </>
  )
}

export default Answerholder