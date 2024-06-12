import { getReel, getReels } from "@/actions/reel"

export async function GET(request, { params: { id, page } }) {
    
    const reel = await getReel(id)

    const reels = await getReels(reel.owner.id)

    return Response.json({
        media: [reel, ...reels],
        page,
        end: true
    })

}