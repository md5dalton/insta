"use server"
import OList from "@/components/OList"
import Post from "@/components/Post/Post"
import prisma from "@/utils/prisma"


export const getPosts = async page => {

    // const randomRecords = await prisma.$queryRaw`SELECT id FROM post ORDER BY RAND() LIMIT 10`
   
    const items = await prisma.post.findManyRandom(10, {
        // where: {
        //     id: {
        //         in: randomRecords.map(({ id }) => id)
        //     }
        // },
        select: {
            media: {
                select: {
                    id: true,
                    height: true,
                    width: true,
                    reel: true
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
    return items
    // console.log(items)

    return (
        <OList
            page={page}
            items={items}
            itemHandler={item => <Post {...item} />}
        />
    )

}