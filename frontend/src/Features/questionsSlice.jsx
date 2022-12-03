import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const QUESTIONS_DB_URL = ''

const initialState = {
    content: [],
    status: idle,
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
                subject: response.data[key].subject,
                question_date: response.data[key].subject,
                question: response.data[key].question
            })
        }
        return questionsData
    } catch (error) {
        return error.message
    }
})

export const addNewQuestion = createAsyncThunk('questions/addNewQuestion', async (initialQuestion) => {
    try {
        const response = await axios.post(QUESTIONS_DB_URL, initialQuestion)
        return response.data
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
                state.content.push(action.payload)
            })
    }
})

export const getAllQuestions = (state)=>state.questions.content 
export const getQuestionsStatus = (state)=>state.questions.status
export const getQuestionsError = (state)=>state.questions.error
export const { deteleQuestion } = questionsSlice.actions
export default questionsSlice.reducer