import { array_column } from "@/utils/functions"
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
            const ids = array_column(state.cumulativeData, "id")
            
            state.cumulativeData = [...state.cumulativeData, ...action.payload.filter(({ id }) => !ids.includes(id))]
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