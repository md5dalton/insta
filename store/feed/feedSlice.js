import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: []
}

const feedSlice = createSlice({
    name: "feed",
    initialState,
    reducers: {
        // getPosts: state => state+=1
    }
})

export const getPosts = createAsyncThunk(
    "feed/getPosts",
    // async () => 
)

export const feedReducer = feedSlice.reducer
// export const { getPosts } = feedSlice.actions