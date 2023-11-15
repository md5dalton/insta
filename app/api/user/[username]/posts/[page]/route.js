import { getUserPosts } from "@/actions/user"

export async function GET(request, { params: { username, page } }) {
    
    const posts = await getUserPosts(username, page)

    return Response.json({
        media: posts.map(({ id, picture }) => ({id, picture})),
        page,
        end: posts.length <= 10
    })

}