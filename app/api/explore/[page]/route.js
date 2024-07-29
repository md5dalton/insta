import { getPosts } from "@/actions/feed"
import { find } from "@/generator/finder"
import { shuffle } from "@/utils/functions"

export async function GET(req, { params: { page } }) {

    // const posts = await getPosts()
    const thumbs = await find("/media/_thumbs", ["jpg"])

    const ids = shuffle(thumbs.map(i => i.split("/").pop().split(".").shift()))

    // console.log(ids)
    const post = {hasReel: true, p: page}

    const posts =[]

    const media = []

    const pageSize = 8

    for (let index = 0; index < pageSize; index++) posts.push({id: index, picture: `t:${ids[page*pageSize + index]}`, ...post})

    for (let i = 0; i < posts.length; i += 2) media.push(posts.slice(i, i + 2))
    
    media.splice(2, 0, [{id: 0, reel: true}], [{id: 1, reel: true}])
    console.log(media.length)
    return Response.json({
        media: media,
        page,
        end: false
    })

}