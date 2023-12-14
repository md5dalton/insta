import { getUser } from "@/actions/user"

export async function GET(request, { params: { username } }) {

    const user = await getUser(username)
    
    if (!user) return Response.json({error: "User not found"}, { status: 404 })
    
    return Response.json({
        name: user.path.split("/").pop(),
        picture: user.picture,
        hasNew: true,
        id: user.id,
        username: user.id,
        category: {
            name: user.owner.path.split("/").pop(),
            id: user.owner.id,
        },
        // description: "This is my official Letlapa account. Follow me and keep up to date of what I am up to.",
        // links: [
        //     {
        //         text: "whatsapp/me",
        //         url: "https://whatsapp.me/234322"
        //     },
        //     {
        //         text: "linktr.ee/iggy",
        //         url: "https://linktr.ee/iggy"
        //     },
        //     {
        //         text: "twitter/iggy",
        //         url: "https://twitter.com/iggy"
        //     },
        // ]
    })

}