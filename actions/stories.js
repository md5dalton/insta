"use server"

import Story from "@/app/(stories)/Story"
import OList from "@/components/OList"
import prisma from "@/utils/prisma"

export const getStories = async () => {

    const randomRecords = await prisma.$queryRaw`SELECT id FROM user ORDER BY RAND() LIMIT 10`
   
    const items = await prisma.user.findMany({
        where: {
            id: {
                in: randomRecords.map(({ id }) => id)
            }
        },
        select: {
            id: true,
            name: true,
            picture: true
        }
    })

    
    return (
        <OList
            items={items}
            itemHandler={item => <Story {...item} />}
        />
    ) 
    // items.map((item, index))
    // id, name, picture, hasNew
}