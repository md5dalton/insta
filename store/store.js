import { configureStore } from "@reduxjs/toolkit"
import { feedReducer } from "./feed/feedSlice"
import { instaApi } from "@/services/api"
import { setupListeners } from "@reduxjs/toolkit/query"

export const makeStore = () => configureStore({
    reducer: {
        [instaApi.reducerPath]: instaApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(instaApi.middleware)
})

setupListeners(makeStore().dispatch)