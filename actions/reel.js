import prisma from "@/utils/prisma"

export const getReel = async id => await prisma.reel.findUnique({
    where: {
        id
    },
    select: {
        id: true,
        owner: {
            select: {
                id: true,
                name: true,
                picture: true,
            }
        }
    }
})