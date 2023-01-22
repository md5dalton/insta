"use client"
import InfiniteList from "../../../InfiniteList"
import VideoTile from "./VideoTile"

export default ({ path }) => {

    const mediaHandler = media => <VideoTile {...media} /> 

    return (
        <InfiniteList
            path={path}
            className="grid grid-cols-3 gap-[3px]"
            threshold={600}
            mediaHandler={mediaHandler}
        />
    )
}