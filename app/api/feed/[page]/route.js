import { getPosts } from "@/actions/feed"

export async function GET(req, { params: { page } }) {

    const posts = await getPosts()
    
    return Response.json({
        media: posts,
        page,
        end: posts.length == 0
    })

}