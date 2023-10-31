import { getPosts } from "@/actions/feed"

export async function GET(request, { params: { page } }) {

    const posts = await getPosts()

    return new Response(JSON.stringify({
        media: posts,
        page,
        end: true

    }), { status: 200 })

}