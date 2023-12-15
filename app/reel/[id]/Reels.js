"use client"
import { useState } from "react"
import InfiniteMedia from "../../InfiniteMedia"
import Reel from "./Reel"

export default ({ path }) => {

    const height = `calc(100vh - 56px)`

    const [ muted, setMuted ] = useState(false)

    const mediaHandler = media => <Reel height={height} muted={muted} setMuted={setMuted} {...media} /> 

    return (
        <InfiniteMedia
            // listProps={{style: {height}}}
            listProps={{itemHandlerProps: {className: "h-full"}}}
            path={path}
            listClassName="overflow-y-scroll snap-y snap-mandatory absolute bg-pink-500 z-10 h-full w-full"
            bottomOffset="-10px"
            mediaHandler={mediaHandler}
        />
    )
}