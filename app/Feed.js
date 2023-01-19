"use client"

import Post from "../components/Post"
import InfiniteMedia from "./InfiniteMedia"

export default ({ path }) => {

    const mediaHandler = media => <Post {...media} /> 

    return (
        <InfiniteMedia
            path={path}
            listClassName="grid gap-8"
            bottomOffset="-600px"
            mediaHandler={mediaHandler}
        />
    )
}