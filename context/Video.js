"use client" 
import { createContext, useContext, useState } from "react"

const VideoContext = createContext()

export const useVideo = () => useContext(VideoContext)

export const VideoProvider = ({ children }) => {

    const [video, setVideo] = useState()

    const videoHandler = vid => {

        if (video && !video.paused) video.pause()

        setVideo(vid)

    }
    
    return <VideoContext.Provider
        value={{
            videoHandler
        }}
    >
        {children}
    </VideoContext.Provider>
}