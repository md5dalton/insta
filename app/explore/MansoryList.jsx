"use client"
import MansoryColumn from "./MansoryColumn"
import UList from "@/components/UList"
import useMedia from "@/hooks/useMedia"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { explore } from "@/signals/sizes"

export default () => {

    const { ref, inView } = useInView()

    const { 
        media, size,
        loadmore
    } = useMedia("/explore", explore.value)
    
    useEffect(() => {
        if (inView) loadmore()
    }, [inView])

    useEffect(() => {
        if (size > explore.value) explore.value = size + 1
    }, [size])
    
    return (
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
    )
}