import { useNavigate, useParams } from 'react-router-dom'
import userimg from '../Resources/user.png'
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";

function Questionbox({ question_id, username, user_id, subject, question_date, question }) {
  const navigate = useNavigate()

  const question_data = {
    question_id: `${question_id}`,
    username: `${username}`,
    user_id: `${user_id}`,
    subject: `${subject}`,
    question_date: `${question_date}`,
    question: `${question}`
  }

  const isLoggedinUser = JSON.parse(localStorage.getItem('user/user_id'))

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
          <div className="qtnActions">
            <div>
              <p className='question'>
                {question_data.question}
              </p>
              <p className='subject'>
                Subject: {question_data.subject}
              </p>
            </div>
            {(question_data.user_id === isLoggedinUser) ?
              <div className='actions'>
                <FaPencilAlt size='18px' color='amber'/>
                <FaTrashAlt size='18px' color='tomato'/>
              </div> :
              <div></div>}
          </div>
          <button className='answer-link' onClick={viewAnswers}>Answers</button>
        </div>
      </div>
    </>
  )
}

export default Questionbox