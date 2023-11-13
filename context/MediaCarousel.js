"use client" 
import { array_column } from "@/utils/functions"
import { createContext, useContext, useState } from "react"

const MediaCarouselContext = createContext()

export const useMediaCarousel = () => useContext(MediaCarouselContext)

export const MediaCarouselProvider = ({ children }) => {

    const [inView, setInView] = useState(false)
    
    const getCurrent = media => inView ? array_column(media, "id").indexOf(inView.id) + 1 : null
    
    return <MediaCarouselContext.Provider
        value={{
            inView,
            setInView,
            getCurrent
        }}
    >
        {children}
    </MediaCarouselContext.Provider>
}