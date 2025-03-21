"use client"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { getSession } from "next-auth/react"

const baseQuery = fetchBaseQuery({
    
    baseUrl: process.env.NEXT_PUBLIC_API,

    prepareHeaders: async headers => {

        // const session = await getSession()
      
        // if (session && session.token) headers.set('Authorization', `Bearer ${session.token}`)
      
        return headers
    
    }
})

export const instaApi = createApi({
    reducerPath: "instaApi",
    baseQuery,
    endpoints: builder => ({
        listFeedPosts: builder.query({
            query: (page = 1) => `/feed/${page}`,
        }),
    }),
})

export const { useListFeedPostsQuery } = instaApi