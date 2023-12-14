import { getPosts } from "@/actions/user"

export async function GET(req, { params: { username, page } }) {
    
    const posts = await getPosts(username, page)

    return Response.json({
        media: posts.map(({ id, picture }) => ({id, picture})),
        page,
        end: posts.length <= 10
    })

}