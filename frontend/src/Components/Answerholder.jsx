import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { fetchAnswers, getAllAnswers, getAnswersError, getAnswersStatus } from '../Features/answersSlice'
import Answerbox from './Answerbox'
import Answerform from './Answerform'
import BackButton from './BackButton'
import Questionbox from './Questionbox'

function Answerholder() {
  const location = useLocation()
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const question_id = location.state.question_id

  const answers = useSelector(getAllAnswers)
  const status = useSelector(getAnswersStatus)
  const error = useSelector(getAnswersError)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAnswers(question_id))
    }
  }, [status, dispatch])

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
      {/* <Answerbox /> */}

      {answers.map((answerItem, ansIdx) => {
        console.log(answerItem);

        const answer = answerItem.answer
        const answer_id = answerItem.answer_id
        const downvotes = answerItem.downvotes
        const question_id = answerItem.question_id
        const upvotes = answerItem.upvotes
        const user_id = answerItem.user_id


        return <Answerbox key={ansIdx} answer={answer} answer_id={answer_id} downvotes={downvotes} question_id={question_id} upvotes={upvotes} user_id={user_id} />
      })}
    </>
  )
}

export default Answerholder