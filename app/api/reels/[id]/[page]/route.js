import { getReel } from "@/actions/reel"

export async function GET(request, { params: { id, page } }) {
    
    const reel = await getReel(id)
    // console.log(reel)

    return Response.json({
        media: [reel],
        page,
        end: true
    })

}