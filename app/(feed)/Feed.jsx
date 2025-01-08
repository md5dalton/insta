"use client"
import Post from "@/components/Post/Post"
import { useInView } from "react-intersection-observer"
import useMedia from "@/hooks/useMedia"
import { feed } from "@/signals/sizes"
import { useEffect, useRef, useState } from "react"
import UList from "@/components/UList"
import { addPosts, posts } from "@/signals/feed"
import { useAppDispatch, useAppSelector, useAppStore } from "@/hooks/useStore"
import { getPosts } from "@/store/feed/feedSlice"
import { getFeedPosts, useGetFeedPosts, useGetFeedPostsQuery, useListFeedPostsQuery } from "@/services/api"
import { useSelector } from "react-redux"
import { addData, setPage, setScrollPostion } from "@/store/pagination/paginationSlice"
import Button from "@/components/elements/Button"
import { debounce } from "lodash"

export default () => {

    
    const indicator = useRef(Math.random())
    
    const dispatch = useAppDispatch() 
    
    const { currentPage, cumulativeData, scrollPosition } = useSelector(state => state.pagination)

    const { data, error, isLoading } = useListFeedPostsQuery(currentPage)

    useEffect(() => {
        
        if (data?.media ) dispatch(addData(data.media))
        console.log(currentPage)
    }, [data, dispatch, currentPage])

    const handlePageChange = newPage => dispatch(setPage(newPage))
    
    // const { ref, inView } = useInView()

    // useEffect(() => {
    //     if (inView) handlePageChange(currentPage+1)
    // }, [inView])

    useEffect(() => {
        // console.log(scrollPosition, indicator.current)
        window.scrollTo(0, scrollPosition)
    }, [indicator])
    // useEffect(() => {
    //     console.log(scrollPosition)
    //     // window.scrollTo(0, scrollPosition)
    // }, [scrollPosition])

    useEffect(() => {
        
        const handleScroll = debounce(() => dispatch(setScrollPostion(window.scrollY)))

        window.addEventListener("scroll", handleScroll)
        // console.log("feed mount", scrollPosition, indicator)
        console.log(cumulativeData)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            // console.log("feed unmount", scrollPosition)
        }
    }, [])
    // useEffect(() => {
        
    //     console.log(s)

    // }, [s])

    return (
        error ? <p>error</p> :
        isLoading ? <p>loading</p> :
        <UList
            items={cumulativeData}
            itemHandler={item => <Post {...item} />}
        >
            <Button
                onClick={() => handlePageChange(currentPage+1)}
                className="border-[1px] py-2 px-4 mx-auto my-4" >load more</Button>
            {/* <div ref={ref} /> */}
        </UList>
    )
}