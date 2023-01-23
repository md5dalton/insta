"use client"
import { useState } from "react"
import InfiniteMedia from "../../InfiniteMedia"
import Reel from "./Reel"

export default ({ path }) => {

    const [ muted, setMuted ] = useState(false)

    const mediaHandler = media => <Reel muted={muted} setMuted={setMuted} {...media} /> 

    return (
        <InfiniteMedia
            path={path}
            listClassName="h-screen overflow-y-scroll snap-y snap-mandatory"
            bottomOffset="-10px"
            mediaHandler={mediaHandler}
        />
    )
}