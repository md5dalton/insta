"use client"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

let page = 2

export default ({ handler }) => {
    
    const { ref, inView } = useInView()

    const [ data, setData ] = useState([])
    
    console.log(data)
    useEffect(() => {
        if (inView) {
            
            handler(page).then(res => {
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