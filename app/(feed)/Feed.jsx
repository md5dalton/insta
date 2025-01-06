"use client"
import Post from "@/components/Post/Post"
import { useInView } from "react-intersection-observer"
import useMedia from "@/hooks/useMedia"
import { feed } from "@/signals/sizes"
import { useEffect, useState } from "react"
import UList from "@/components/UList"
import { addPosts, posts } from "@/signals/feed"
import { useAppDispatch, useAppSelector, useAppStore } from "@/hooks/useStore"
import { getPosts } from "@/store/feed/feedSlice"
import { getFeedPosts, useGetFeedPosts, useGetFeedPostsQuery, useListFeedPostsQuery } from "@/services/api"

export default () => {

    const [page, setPage] = useState(1)

    const { data, error, isLoading } = useListFeedPostsQuery(page)
    const feed = useAppSelector(state => state)
    // const dispatch = useAppDispatch()
    // const store = useAppStore()

    const { ref, inView } = useInView()

    // const { 
    //     media, size,
    //     loadmore
    // } = useMedia("/feed")
    
    // addPosts(size, media)

    // posts.value = media

    console.log(feed)

    useEffect(() => {
        if (inView) setPage(page+1)
    }, [inView])

    // useEffect(() => {
    //     if (size > feed.value) feed.value = size + 1
    // }, [size])
    
    return (
        error ? <p>error</p> :
        isLoading ? <p>loading</p> :
        <UList
            items={data.media}
            itemHandler={item => <Post {...item} />}
        >
            <div ref={ref} />
        </UList>
    )
}