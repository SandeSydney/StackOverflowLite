import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const USERS_DB_URL = 'http://localhost:4040/users'

const initialState = {
    content: [],
    profile: {},
    token: '',
    status: 'idle',
    isLoggedIn: false,
    error: null
}

export const getUserById = createAsyncThunk('users/getUser', async (user_id) => {
    try {
        const response = await axios.get(`${USERS_DB_URL}/${user_id}`)
        const user_data = []
        user_data.push(response.data)
        return user_data
    } catch (error) {
        return error.message
    }
})

export const loginUser = createAsyncThunk('users/loginUser', async (user_details) => {
    try {
        await axios.post(`${USERS_DB_URL}/login`, user_details).then((response) => {
            if (response.data.token) {
                localStorage.setItem("user/token", JSON.stringify(response.data.token))
                localStorage.setItem("user/user_id", JSON.stringify(response.data.user_id))
            } else {
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
        console.log(response);
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
            state.profile = ''
        },
        changePage(state, action){
            state.status = 'idle'
        }
    },
    extraReducers(builder) {
        builder
            .addCase(addUser.fulfilled, (state, action) => {
                state.content.push(action.payload)
            })
            .addCase(getUserById.fulfilled, (state, action) => {
                state.profile = action.payload[0]
            })
            .addCase(loginUser.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'idle'
                if (!action.payload) {
                    state.isLoggedIn = true
                } else {
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
export const getUserProfile = (state) => state.users.profile
export const getUserLoggedIn = (state) => state.users.isLoggedIn
export const getUserError = (state) => state.users.error
export const getUserStatus = (state) => state.users.status
export const { logoutUser, changePage } = usersSlice.actions
export default usersSlice.reducer