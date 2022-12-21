import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuestions, getAllQuestions, getQuestionsError, getQuestionsStatus } from '../Features/questionsSlice'
import Questionbox from './Questionbox'

function Questionsholder() {
    const dispatch = useDispatch()

    const questions = useSelector(getAllQuestions)
    const status = useSelector(getQuestionsStatus)
    const error = useSelector(getQuestionsError)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchQuestions())
        }
    }, [status, dispatch])

    let questions_content
    if (status === 'loading') {
        <p>Loading...</p>
    } else if (status === 'succeeded') {

        if (questions.length) {

            questions_content = questions.map((questionItm) => {


                const question_id = questionItm.question_id
                const username = questionItm.username
                const user_id = questionItm.user_id
                const subject = questionItm.subject
                const question_date = questionItm.question_date
                const question = questionItm.question


                return <Questionbox
                    key={question_id}
                    question={question}
                    question_id={question_id}
                    username={username}
                    user_id={user_id}
                    subject={subject}
                    question_date={question_date} />
            })

        } else {
            <p style={{ "alignItems": "center" }}>No Questions Yet!</p>
        }

    } else if (status === 'failed') {
        questions_content = <p>{error}</p>
    }

    return (
        <div className="questions-holder">
            {questions_content}
        </div>
    )
}

export default Questionsholder