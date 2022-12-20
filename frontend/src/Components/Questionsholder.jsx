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

            questions_content = questions.map((question, question_id) => {
                return <Questionbox key={question_id} question={question}/>
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