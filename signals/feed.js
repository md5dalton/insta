import { signal } from "@preact/signals-react"

export const posts = signal({})

export const addPosts = (page, media) => posts.value[page] = media
// console.log(video.value)
