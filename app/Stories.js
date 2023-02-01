"use client"
import InfiniteList from "./InfiniteList"
import Story from "./Story"

export default ({ path }) => {

    const mediaHandler = media => <Story {...media} /> 

    return (
        <InfiniteList
            className="flex gap-x-2 w-full px-4 overflow-x-scroll"
            path={path}
            threshold={1000}
            mediaHandler={mediaHandler}
        />
    )
}