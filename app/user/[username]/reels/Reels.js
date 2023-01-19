"use client"
import InfiniteMedia from "../../../InfiniteMedia"
import ReelTile from "./ReelTile"

export default ({ path }) => {

    const mediaHandler = media => <ReelTile {...media} /> 

    return (
        <InfiniteMedia
            path={path}
            listClassName="grid grid-cols-3 gap-[3px]"
            bottomOffset="-300px"
            mediaHandler={mediaHandler}
        />
    )
}