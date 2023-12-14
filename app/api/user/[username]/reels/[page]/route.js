import { getReels } from "@/actions/user"

export async function GET(req, { params: { username, page } }) {
    
    const media = await getReels(username, page)
    console.log(media)
    return Response.json({
        media: media.map(({ id }) => ({id})),
        page,
        end: media.length <= 10
    })

}