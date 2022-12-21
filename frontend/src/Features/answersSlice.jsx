import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'
import auth_helper from "../Components/AuthenticationHelper"

const ANSWERS_DB_URL = 'http://localhost:3030/questions'

const initialState = {
    content: [],
    status: 'idle',
    error: null
}

export const fetchAnswers = createAsyncThunk("answers/fetchAnswers", async (question_id) => {
    try {
        const response = await axios.get(`${ANSWERS_DB_URL}/${question_id}/answers`)
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

            return answersData
        }
    } catch (error) {
        return error.message
    }
})

export const addAnswer = createAsyncThunk("answers/addAnswer", async (answer_details) => {
    try {
        const question_id = answer_details.question_id
        const response = await axios.post(`${ANSWERS_DB_URL}/${question_id}/answers`, answer_details, { headers: auth_helper() })
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
                state.content = state.content.concat(answersLoaded)
            })
            .addCase(fetchAnswers.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
            .addCase(addAnswer.fulfilled, (state, action) => {
                state.status = "idle"
            })
    }
})


export const getAllAnswers = (state) => state.answers.content
export const getAnswersStatus = (state) => state.answers.status
export const getAnswersError = (state) => state.answers.error
export default answersSlice.reducer