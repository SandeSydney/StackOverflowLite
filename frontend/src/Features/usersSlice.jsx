import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const USERS_DB_URL = ''

const initialState = {
    content: [],
    logged: false,
    status: 'idle',
    error: null
}


export const fetchUsers = createAsyncThunk('uses/fetchUsers', async () => {
    try {
        const response = await axios.get(USERS_DB_URL)
        let usersData = []
        for (let key in response.data) {
            usersData.push({
                user_id: response.data[key].user_id,
                username: response.data[key].username,
                email: response.data[key].email,
                password: response.data[key].password
            })
        }
    } catch (error) {
        return error.message
    }
})

export const addUser = createAsyncThunk('users/addUser', async (user_details) => {
    try {
        const response = await axios.post(USERS_DB_URL, user_details)
        return response.data
    } catch (error) {
        return error.message
    }
})

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(addUser.fulfilled, (state,action)=>{
                state.content.push(action.payload)
            })
            .addCase(fetchUsers.pending, (state,action)=>{
                state.status = 'loading'
            })
            .addCase(fetchUsers.fulfilled, (state, action)=>{
                state.status = 'succeeded'
                const usersLoaded = action.payload.map(user=>{
                    return user
                })
                state.content = state.content.concat(usersLoaded)
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const getAllUsers = (state)=>state.users.content
export const getUsersStatus = (state)=>state.users.status
export const getUsersError = (state)=>state.users.error
export default usersSlice.reducer