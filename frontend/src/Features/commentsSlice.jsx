import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const COMMENTS_DB_URL = ''

const initialState = {
    content: [],
    status: 'idle',
    error: null
}

export const fetchComments = async()=>{
    try {
        const response = await axios.get(COMMENTS_DB_URL)
        let commentsData = []
        for(let key in response.data){
            commentsData.push({
                comment_id: response.data[key].comment_id,
                comment: response.data[key].comment,
                answer_id: response.data[key].answer_id,
                question_id: response.data[key].question_id,
                user_id: response.data[key].user_id
            })
        }
    } catch (error) {
        
    }
}

export const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
            .addCase()
    }
})