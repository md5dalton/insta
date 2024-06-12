"use server"
import OList from "@/components/OList"
import Post from "@/components/Post/Post"
import prisma from "@/utils/prisma"

export const getPosts = async () => {

    const randomRecords = await prisma.$queryRaw`SELECT id FROM post ORDER BY RAND() LIMIT 10`
   
    const items = await prisma.post.findMany({
        where: {
            id: {
                in: randomRecords.map(({ id }) => id)
            }
        },
        include: {
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

    
    return (
        <OList
            items={items}
            itemHandler={item => <Post {...item} />}
        />
    )

}