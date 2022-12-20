import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const USERS_DB_URL = 'http://localhost:4040/users'

const initialState = {
    content: [],
    token: '',
    status: 'idle',
    isLoggedIn: false,
    error: null
}


export const loginUser = createAsyncThunk('users/loginUser', async (user_details) => {
    try {
        await axios.post(`${USERS_DB_URL}/login`, user_details).then((response) => {
            if (response.data.token) {
                localStorage.setItem("user/token", JSON.stringify(response.data.token))
                localStorage.setItem("user/user_id", JSON.stringify(response.data.user_id))
            } else{
                console.log("Invalid Details");
            }
        })
    } catch (error) {
        return error.message
    }
})

export const addUser = createAsyncThunk('users/addUser', async (user_details) => {
    try {
        const response = await axios.post(`${USERS_DB_URL}/signup`, user_details)
        return response.data
    } catch (error) {
        return error.message
    }
})

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        logoutUser(state, action) {
            state.status = 'idle'
            state.isLoggedIn = false
        }
    },
    extraReducers(builder) {
        builder
            .addCase(addUser.fulfilled, (state, action) => {
                state.content.push(action.payload)
            })
            .addCase(loginUser.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded'
                if (!action.payload) {
                    state.isLoggedIn = true
                } else{
                    state.error = "User Not Found!"
                }
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const getUser = (state) => state.users.content
export const getUserLoggedIn = (state) => state.users.isLoggedIn
export const getUserError = (state) => state.users.error
export const { logoutUser } = usersSlice.actions
export default usersSlice.reducer