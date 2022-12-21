import React from 'react'
import userimg2 from '../Resources/user6.jpeg'
import upvote from '../Resources/upvote.png'
import downvote from '../Resources/downvote.png'
import comment from '../Resources/comment.png'

function Answerbox({ answer, answer_id, downvotes, question_id, upvotes, user_id }) {
  return (
    <div className="answer-main">
      <div className='answer-box'>
        <div className='qtnAns'>
          <p className='answer'>
            {answer}
          </p>
        </div>
        <div className="user-details">
          <img src={userimg2} alt="user profile pic" />
          <p>Jane Doe</p>
        </div>
      </div>
      <div className="answer-votes">
        <div className="votes">
          <p>{upvotes}</p>
          <img src={upvote} alt="Upvote" />
          <p>Upvote</p>
        </div>
        <div className="votes">
          <p>{downvotes}</p>
          <img src={downvote} alt="Downvote" />
          <p>Downvote</p>
        </div>
        <div className="votes">
          <p>0</p>
          <img src={comment} alt="Comment" />
          <p>Comment</p>
        </div>
      </div>
    </div>
  )
}

export default Answerbox