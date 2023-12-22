import { getPosts } from "@/actions/feed"

export async function GET(req, { params: { page } }) {

    const posts = await getPosts()
    
    return new Response(JSON.stringify({
        media: posts,
        page,
        end: posts.length == 0
    }), { status: 200 })

}