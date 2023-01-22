"use client"

import { useEffect, useRef } from "react"
import { Waypoint } from "react-waypoint"

export default ({ id, src, setMute }) => {

    const video = useRef(null)

    const play = () => console.log("play")
    const load = () => {
        console.log("load")
        if (!video.current.src) video.current.src = src
        video.current.load()
    }
    const pause = () => console.log("pause")
    const unload = () => {
        console.log("unload")
        video.current.pause()
    }

    // useEffect(() => {
        
    //     video.current.onPlay = () => {

    //         if (video.current.muted) console.log(video.current)

    //     }


    // }, [id])

    return (
        <>
            <video
                className="w-full h-full my-auto"
                // src={src}
                autoPlay
                // muted
                loop
                controls={false}
                ref={video}
            ></video>
            <Waypoint
                fireOnRapidScroll={false}
                onEnter={load}
                onLeave={unload}
                // onEnter={({ previousPosition, currentPosition }) => console.log("enter", id, previousPosition, currentPosition)}
                // onLeave={({ previousPosition, currentPosition }) => console.log("leave", id, previousPosition, currentPosition)}
                // onPositionChange={() => console.log("position")}
                // bottomOffset="-100px"
            >
            </Waypoint>
        </>
    )
}
