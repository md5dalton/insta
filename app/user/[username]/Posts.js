"use client"
import InfiniteList from "../../InfiniteList"
import PostTile from "../../PostTile"

export default ({ path }) => {

    const mediaHandler = media => <PostTile {...media} /> 

    return (
        <InfiniteList
            path={path}
            className="grid grid-cols-3 gap-[3px]"
            threshold={300}
            mediaHandler={mediaHandler}
        />
    )
}