import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import auth_helper from '../Components/AuthenticationHelper'

const QUESTIONS_DB_URL = 'http://localhost:3030/questions'

const initialState = {
    content: [],
    status: 'idle',
    error: null,
}

export const fetchQuestions = createAsyncThunk('questions/fetchQuestions', async () => {
    try {
        const response = await axios.get(QUESTIONS_DB_URL)
        let questionsData = []
        for (let key in response.data) {
            questionsData.push({
                question_id: response.data[key].question_id,
                user_id: response.data[key].user_id,
                username: response.data[key].username,
                subject: response.data[key].subject,
                question_date: response.data[key].question_date,
                question: response.data[key].question
            })
        }
        return questionsData
    } catch (error) {
        return error.message
    }
})

export const getMyQuestions = createAsyncThunk('questions/getMyQuestions', async () => {
    try {
        const user_id = auth_helper().user_id
        const response = await axios.get(`${QUESTIONS_DB_URL}/user-questions/${user_id}`, { headers: auth_helper() })
        let myQstnData = []
        for (let key in response.data) {
            myQstnData.push({
                question_id: response.data[key].question_id,
                user_id: response.data[key].user_id,
                username: response.data[key].username,
                subject: response.data[key].subject,
                question_date: response.data[key].question_date,
                question: response.data[key].question
            })
        }
        return myQstnData
    } catch (error) {
        return error.message
    }
})

export const addNewQuestion = createAsyncThunk('questions/addNewQuestion', async (initialQuestion) => {
    try {
        const response = await axios.post(QUESTIONS_DB_URL, initialQuestion, { headers: auth_helper() })
        console.log(response.data)
    } catch (error) {
        return error.message
    }
})

export const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        deteleQuestion: (state, action) => {
            return state.content.filter(question => question.id !== action.payload.question_id)
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchQuestions.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchQuestions.fulfilled, (state, action) => {
                state.status = 'succeeded'
                const questionsLoaded = action.payload.map(question => {
                    return question
                })
                state.content = state.content.concat(questionsLoaded)
            })
            .addCase(fetchQuestions.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addNewQuestion.fulfilled, (state, action) => {
                state.status = 'idle'
            })
            .addCase(getMyQuestions.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getMyQuestions.fulfilled, (state, action) => {
                state.status = 'succeeded'
                const questionsLoaded = action.payload.map(question => {
                    return question
                })
                state.content = state.content.concat(questionsLoaded)
            })
    }
})

export const getAllQuestions = (state) => state.questions.content
export const getQuestionsStatus = (state) => state.questions.status
export const getQuestionsError = (state) => state.questions.error
export const { deteleQuestion } = questionsSlice.actions
export default questionsSlice.reducer