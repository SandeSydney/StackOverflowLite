import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const COMMENTS_DB_URL = ''

const initialState = {
    content: [],
    status: 'idle',
    error: null
}

export const fetchComments = createAsyncThunk("comments/fetchComments", async () => {
    try {
        const response = await axios.get(COMMENTS_DB_URL)
        let commentsData = []
        for (let key in response.data) {
            commentsData.push({
                comment_id: response.data[key].comment_id,
                comment: response.data[key].comment,
                answer_id: response.data[key].answer_id,
                question_id: response.data[key].question_id,
                user_id: response.data[key].user_id
            })
        }
    } catch (error) {
        return error.message
    }
})

export const addComment = createAsyncThunk("comments/addComment", async(comment_details)=>{
    try {
        const response = await axios.post(COMMENTS_DB_URL, comment_details)
        return response.data
    } catch (error) {
        return error.message
    }
})

export const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchComments.pending, (state, action)=>{
                state.status = 'loading'
            })
            .addCase(fetchComments.fulfilled, (state, action)=>{
                state.status = 'succeeded'
                const commentsLoaded = action.payload.map(comment=>{
                    return comment
                })
                state.content = state.content.concat(commentsLoaded)
            })
            .addCase(fetchComments.rejected, (state, action)=>{
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addComment.fulfilled, (state, action)=>{
                state.content.push(action.payload)
            })
    }
})


export const getAllComments = (state)=>state.comments.content
export const getCommentStatus = (state)=>state.comments.status
export const getCommentsError = (state)=>state.comments.error
export default commentsSlice.reducer