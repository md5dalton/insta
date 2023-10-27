import { PrismaClient } from "@prisma/client"
import Filemanager from "./Filemanager.js"

const manager = new Filemanager("a:/media/images", ["jpg", "jpeg", "png", "webp"])

await manager.createSuperCollections()

manager.createModels()

const rc = manager.rootCollections.pop()

const prisma = new PrismaClient()

const main = async () => {
    // const rootCollections = await prisma.rootCollection.findMany({
    //     select: {
    //         id: true
    //     },
    // })
    const cols = await prisma.collection.createMany({
        data: manager.collections.slice(0,5),
    })
    // const rootCollection = await prisma.rootCollection.create({
    //     data: {
    //         id: rc.id,
    //         path: rc.path
    //     }
    // })

    console.log(cols)

}

main()
    .then(async () => await prisma.$disconnect())
    .catch(async e => {
        console.log(e)
        await prisma.$disconnect()
        process.exit(1)
    })