import { signal } from "@preact/signals-react"

const video = signal()

// console.log(video.value)

export const setVideo = vid => {
    
    if (video.value && !video.value?.paused) video.value.pause()
    
    // console.log(video.value)
    video.value = vid
    video.value.play()

}