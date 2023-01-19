"use client"
import InfiniteMedia from "../../../InfiniteMedia"
import VideoTile from "./VideoTile"

export default ({ path }) => {

    const mediaHandler = media => <VideoTile {...media} /> 

    return (
        <InfiniteMedia
            path={path}
            listClassName="grid grid-cols-3 gap-[3px]"
            bottomOffset="-300px"
            mediaHandler={mediaHandler}
        />
    )
}