import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../Features/usersSlice'
import questionsReducer from '../Features/questionsSlice'
import answersReducer from '../Features/answersSlice'
import commentsReducer from '../Features/commentsSlice'

const store = configureStore({
    reducer: {
        users: usersReducer,
        questions: questionsReducer,
        answers: answersReducer,
        comments: commentsReducer
    }
})

export default store