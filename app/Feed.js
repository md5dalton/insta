"use client"
import Post from "@/components/Post/Post"
import InfiniteList from "./InfiniteList"

export default ({ path }) => {

    const mediaHandler = media => <Post {...media} /> 
   
    return (
        <InfiniteList
            className="grid gap-8"
            path={path}
            threshold={1000}
            mediaHandler={mediaHandler}
        />
    )
}