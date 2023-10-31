"use client"
import prisma from "@/utils/prisma"
import Post from "../components/Post/Post"
import InfiniteList from "./InfiniteList"
import UList from "./UList"
import { getPosts } from "@/actions/feed"

export default ({ path }) => {
    const mediaHandler = media => <Post {...media} /> 
   
    // const posts = await getPosts()

    // return (
    //     <UList
    //         className="grid gap-8"
    //         items={posts}
    //         itemHandler={item => <Post {...item} />}
    //     />
    // )
    // console.log(posts[0])
    // const mediaHandler = media => <Post {...media} /> 
    // return <img src={`/api/media/${posts[0].picture}`} />      
    return (
        <InfiniteList
            className="grid gap-8"
            path={path}
            threshold={1000}
            mediaHandler={mediaHandler}
        />
    )
}