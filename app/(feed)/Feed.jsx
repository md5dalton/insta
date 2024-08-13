"use client"
import Post from "@/components/Post/Post"
import { useInView } from "react-intersection-observer"
import useMedia from "@/hooks/useMedia"
import { feed } from "@/signals/sizes"
import { useEffect } from "react"
import UList from "@/components/UList"

export default () => {

    const { ref, inView } = useInView()

    const { 
        media, size,
        loadmore
    } = useMedia("/feed", feed.value)
    
    useEffect(() => {
        if (inView) loadmore()
    }, [inView])

    useEffect(() => {
        if (size > feed.value) feed.value = size + 1
    }, [size])
    
    return (
        <UList
            items={media}
            itemHandler={item => <Post {...item} />}
        >
            <div ref={ref} />
        </UList>
    )
}