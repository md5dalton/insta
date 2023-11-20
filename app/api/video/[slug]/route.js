import { getMedia } from "@/actions/media"
import fs from "fs"

export async function GET(request, { params: { slug } }) {

    const media = await getMedia(slug)

    if (media) {
        const post = media.owner
        const user = post.owner
        const collection = user.owner
        const rootCollection = collection.owner

        const videoPath = "a:/media/images" + rootCollection.path + collection.path + user.path + post.path.split("<").shift() + media.path
        
        return fs.existsSync(videoPath) ? new Response(fs.readFileSync(videoPath), {
                headers: {"Content-Type": "image/jpeg"},
                status: 200
        }) : new Response('Image not found', { status: 404 })

    } else return new Response('Media not found', { status: 404 })

}