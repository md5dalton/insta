"use client"
import { useRef } from "react"
import { Waypoint } from "react-waypoint"
import Overlay from "./Overlay"

export default ({ src, muted, setMuted, owner }) => {

    const video = useRef(null)

    const load = () => {
        if (!video.current.src) video.current.src = src
        video.current.load()
    }
    
    const unload = () => video.current.pause()

    const toggleMute = () => setMuted(!video.current.muted)

    return (
        <>
            <div className="player row-span-full col-span-full bg-white/10 grid items-center">
                <video 
                    className="w-full h-full my-auto"
                    autoPlay
                    loop
                    muted={muted}
                    ref={video}
                    controls={false}
                />
                <Waypoint
                    fireOnRapidScroll={false}
                    onEnter={load}
                    onLeave={unload}
                />
            </div>
            <Overlay {...owner} muteHandler={toggleMute} isMuted={muted} />
        </>
    )
}
