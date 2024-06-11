"use client"

import { getStories } from "@/actions/stories"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

let page = 2

export default () => {
    
    const { ref, inView } = useInView()

    const [ data, setData ] = useState([])
    
    
    useEffect(() => {
        if (inView) {
            
            getStories(page).then(res => {
                setData([...data, ...res])
                page++
            })

        }
    }, [inView, data])

    

    return (
        <>
            {data}
            <div ref={ref} />
        </>

    )
}