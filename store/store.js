import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { feedReducer } from "./feed/feedSlice"
import { instaApi } from "@/services/api"
import { setupListeners } from "@reduxjs/toolkit/query"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
import { paginationReducer } from "./pagination/paginationSlice"

const rootReducer = combineReducers({
    [instaApi.reducerPath]: instaApi.reducer,
    pagination: paginationReducer,
})

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["pagination"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const makeStore = () => configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(instaApi.middleware)
})

export const persistor = persistStore(makeStore())

setupListeners(makeStore().dispatch)