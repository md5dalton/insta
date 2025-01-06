"use client"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const instaApi = createApi({
    reducerPath: "instaApi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API }),
    endpoints: builder => ({
        listFeedPosts: builder.query({
            query: (page = 1) => `/feed/${page}`,
        }),
    }),
})

export const { useListFeedPostsQuery } = instaApi