import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../Features/usersSlice'

const store = configureStore({
    reducer: {
        users: usersReducer,
    }
})

export default store