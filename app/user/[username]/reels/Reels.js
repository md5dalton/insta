"use client"
import InfiniteList from "../../../InfiniteList"
import ReelTile from "../../../ReelTile"

export default ({ path }) => {

    const mediaHandler = media => <ReelTile {...media} /> 

    return (
        <InfiniteList
            path={path}
            className="grid grid-cols-3 gap-[3px]"
            threshold={600}
            mediaHandler={mediaHandler}
        />
    )
}