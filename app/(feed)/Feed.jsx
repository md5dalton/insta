// import { getPosts } from "@/actions/feed"
// import LoadMore from "./LoadMore"

// export default async () => {
    
//     const data = await getPosts()

//     return (
//         <ul className="grid gap-8">
//             {data}
//             <LoadMore />
//         </ul>

//     )
// }

"use client"
import Post from "@/components/Post/Post"
import InfiniteList from "../InfiniteList"

export default () => {

    const mediaHandler = media => <Post {...media} /> 

    return (
        <InfiniteList
            className=""
            path={"/feed"}
            threshold={1000}
            mediaHandler={mediaHandler}
        />
    )
}