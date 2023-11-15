import prisma from "@/utils/prisma"

export const getUser = async (user) => await prisma.user.findUnique({
    where: {
        id: user
    },
    include: {
        owner: true
    }
})