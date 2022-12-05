import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

const ANSWERS_DB_URL = ''

const initialState = {
    content: [],
    status: 'idle',
    error: null
}

export const fetchAnswers = createAsyncThunk("answers/fetchAnswers", async () => {
    try {
        const response = await axios.get(ANSWERS_DB_URL)
        let answersData = []
        for (let key in response.data) {
            answersData.push({
                answer_id: response.data[key].answer_id,
                question_id: response.data[key].question_id,
                answer_date: response.data[key].answer_date,
                answer: response.data[key].answer,
                upvotes: response.data[key].upvotes,
                downvotes: response.data[key].downvotes,
                user_id: response.data[key].user_id
            })
        }
    } catch (error) {
        return error.message
    }
})

export const addAnswer = createAsyncThunk("amswers/addAnswer", async (answer_details) => {
    try {
        const response = await axios.post(ANSWERS_DB_URL, answer_details)
        return response.data
    } catch (error) {
        return error.message
    }
})

export const answersSlice = createSlice({
    name: 'answers',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchAnswers.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchAnswers.fulfilled, (state, action) => {
                state.status = "succeeded"
                const answersLoaded = action.payload.map(answer => {
                    return answer
                })
            })
            .addCase(fetchAnswers.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
            .addCase(addAnswer.fulfilled, (state, action)=>{
                state.content.push(action.payload)
            })
    }
})


export const getAllAnswers = (state)=>state.answers.content
export const getAnswersStatus = (state)=>state.answers.status
export const getAnswersError = (state)=>state.answers.error
export default answersSlice.reducer