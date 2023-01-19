"use client"
import InfiniteMedia from "../../InfiniteMedia"
import PostTile from "./PostTile"

export default ({ path }) => {

    const mediaHandler = media => <PostTile {...media} /> 

    return (
        <InfiniteMedia
            path={path}
            listClassName="grid grid-cols-3 gap-[3px]"
            bottomOffset="-300px"
            mediaHandler={mediaHandler}
        />
    )
}