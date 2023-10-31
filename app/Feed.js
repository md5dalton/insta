// "use client"
import prisma from "@/utils/prisma"
import Post from "../components/Post/Post"
import InfiniteList from "./InfiniteList"
import UList from "./UList"

export default async ({ path }) => {

    const posts = await prisma.post.findMany({
        take: 11,
        include: {
            media: {
                select: {
                    id: true,
                    height: true,
                    width: true
                }
            },
            owner: {
                select: {
                    id: true,
                    path: true,
                    picture: true
                }
            }
        }
    })

    return (
        <UList
            className="grid gap-8"
            items={posts}
            itemHandler={item => <Post {...item} />}
        />
    )
    // console.log(posts[0])
    // const mediaHandler = media => <Post {...media} /> 
    // return <img src={`/api/media/${posts[0].picture}`} />      
    // return (
    //     <InfiniteList
    //         className="grid gap-8"
    //         path={path}
    //         threshold={1000}
    //         mediaHandler={mediaHandler}
    //     />
    // )
}