import prisma from "@/utils/prisma"
import fs from "fs"
import path from "path"

export async function GET(request, { params: { slug } }) {

    const media = await prisma.media.findUnique({
        where: {
            id: slug
        },
        include: {
            owner: {
                include: {
                    owner: {
                        include: {
                            owner: {
                                include: {
                                    owner: true
                                }
                            }
                        }
                    }
                }
            }
        }
    })

    if (media) {
        const post = media.owner
        const user = post.owner
        const collection = user.owner
        const rootCollection = collection.owner

        const imagePath = "a:/media/images" + rootCollection.path + collection.path + user.path + post.path.split("<").shift() + media.path
        
        if (fs.existsSync(imagePath)) {
            
            return new Response(fs.readFileSync(imagePath), {
                headers: {"Content-Type": "image/jpeg"},
                status: 200
            })

        } else return new Response('Image not found', { status: 404 })

    } else return new Response('Media not found', { status: 404 })


    // response.body = 

    // if (fs.existsSync(imagePath)) {
        
    //     const image = fs.readFileSync(imagePath)

    //     res.setHeader("Content-Type", "image/jpeg")

    //     res.status(200).end(image, "binary")

    // } else {
    //     res.status(404).end("Image not found")
    // }
    // return new Response('Hello, Next.js!', {
    //     status: 200,
    //     headers: { 'Set-Cookie': `token=${token}` },
    // })
}