import { getPosts } from "@/actions/feed"

export async function GET(req, { params: { page } }) {

    // const posts = await getPosts()

    const post = {picture: "sfse", id: "sdv"}
    const reel = {id: "sdv"}

    const posts =[]
    const reels =[]

    for (let index = 0; index < 12; index++) posts.push(post)
    
    return Response.json({
        media: posts,
        page,
        end: posts.length == 0
    })

}