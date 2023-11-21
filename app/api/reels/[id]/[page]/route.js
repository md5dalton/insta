import { getReel } from "@/actions/reel"

export async function GET(request, { params: { id, page } }) {
    
    const reel = await getReel("paEg1kuI")

    return Response.json({
        media: [reel, reel, reel, reel],
        page,
        end: true
    })

}