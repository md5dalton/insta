"use client"

import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import { getPosts } from "@/actions/feed"

let page = 2

export default () => {
    
    const { ref, inView } = useInView()

    const [ data, setData ] = useState([])
    
    
    useEffect(() => {
        if (inView) {
            
            getPosts(page).then(res => {
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