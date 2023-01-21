"use client"
import InfiniteMedia from "../../InfiniteMedia"
import Reel from "./Reel"

export default ({ path }) => {

    const mediaHandler = media => <Reel {...media} /> 

    return (
        <InfiniteMedia
            path={path}
            listClassName="h-screen overflow-y-scroll snap-y snap-mandatory"
            bottomOffset="-600px"
            mediaHandler={mediaHandler}
        />
    )
}