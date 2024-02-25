import { getPost, getPosts } from "@/actions/post"

export async function GET(req, { params: { id, page } }) {
    
    const post = await getPost(id)

    if (!post) return Response.error("post not found")

    const posts =  await getPosts(post.ownerId, page)

    // console.log(posts)

    return Response.json({
        media: posts,
        page,
        end: true
    })

}