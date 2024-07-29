"use client"
import InfiniteScroll from "react-infinite-scroller"
import MansoryColumn from "./MansoryColumn"
import UList from "@/components/UList"
import useMedia from "@/hooks/useMedia"
import List from "@/components/List"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { explore } from "@/signals/sizes"

export default () => {

    const { ref, inView } = useInView()

    const { 
        media, error, isLoading, end, size,
        loadmore
    } = useMedia("/explore", explore.value)
    
    useEffect(() => {
        if (inView) {
            console.log("in view")
            loadmore()
        }
    }, [inView])
    useEffect(() => {
        console.log("explore.value", explore.value)
        console.log("size", size)
        if (size > explore.value) explore.value = size + 1
    }, [size])
    console.log(explore.value)
    return (
        // <InfiniteScroll
        //     loadMore={loadmore}
        //     hasMore={true}
        //     threshold={600}
        //     element="ul"
        // >
            <UList
                className="grid grid-cols-3 gap-[3px]"
                itemHandlerProps={{
                    className: "grid"
                }}
                items={media}
                itemHandler={item => <MansoryColumn items={item} />}
            >
                <div ref={ref} />
            </UList>
        // </InfiniteScroll>
    )
}