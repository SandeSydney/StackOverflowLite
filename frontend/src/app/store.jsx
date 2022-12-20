import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../Features/usersSlice'
import questionsReducer from '../Features/questionsSlice'

const store = configureStore({
    reducer: {
        users: usersReducer,
        questions: questionsReducer,
    }
})

export default store