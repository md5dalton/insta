import { getReel } from "@/actions/reel"

export async function GET(request, { params: { id } }) {
    
    const reel = await getReel("002OQBoF")
    console.log(reel)
    // const post = reel.owner
    // const user = post.owner

    // return Response.json({
    //     id: reel.id,
    //     picture: post.picture,
    //     owner: user,
    //     related: []
    // })

}