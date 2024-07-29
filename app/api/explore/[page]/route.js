import { getPosts } from "@/actions/feed"

export async function GET(req, { params: { page } }) {

    // const posts = await getPosts()

    const post = {picture: "t:sfse", hasReel: true}

    const posts =[]

    const media = []

    for (let index = 0; index < 8; index++) posts.push({id: index, ...post})

    for (let i = 0; i < posts.length; i += 2) media.push(posts.slice(i, i + 2))
    
    media.splice(2, 0, [{id: 0, reel: true}], [{id: 1, reel: true}])
    
    return Response.json({
        media: media,
        page,
        end: true
    })

}