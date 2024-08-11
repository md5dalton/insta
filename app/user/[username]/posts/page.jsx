"use client"
import UList from "@/components/UList"
import useMedia from "@/hooks/useMedia"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import PostTile from "./PostTile"

export default ({ params: { username } }) => {

    const { ref, inView } = useInView()

    const { 
        media, error,
        loadmore
    } = useMedia(`/user/${username}/posts`)

    
    useEffect(() => {
        if (inView) loadmore()
    }, [inView])

    return (
        error ?
        <p className="text-center p-4">{error.message}</p> :
        <UList
            className="grid grid-cols-3 gap-[3px]"
            itemHandlerProps={{
                className: "h-[calc(100vw/3)]"
            }}
            items={media}
            itemHandler={item => <PostTile {...item} />}
        >
            <div ref={ref} />
        </UList>
    )
}