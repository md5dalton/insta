import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentPage: 1,
    scrollPosition: 0,
    cumulativeData: [],
}

const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        addData (state, action) {
            state.cumulativeData = [...state.cumulativeData, ...action.payload]
        },
        setPage (state, action) {
            state.currentPage = action.payload
        },
        resetPagination (state) {
            state.currentPage = 1
            state.cumulativeData = []
            state.scrollPosition = 0
        },
        setScrollPostion (state, action) {
            state.scrollPosition = action.payload
        },
    },
})

export const { addData, setPage, resetPagination, setScrollPostion } = paginationSlice.actions
export const paginationReducer = paginationSlice.reducer