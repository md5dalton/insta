import { NextResponse } from "next/server"

export async function GET(request, { params: { username } }) {

    const user = {
        name: "Mpho Mothae",
        hasNew: true,
        username: username,
        picture: "/images/iggy/profile.jpg",
        category: "Personality",
        description: "This is my official Letlapa account. Follow me and keep up to date of what I am up to.",
        links: [
            {
                text: "whatsapp/me",
                url: "https://whatsapp.me/234322"
            },
            {
                text: "linktr.ee/iggy",
                url: "https://linktr.ee/iggy"
            },
            {
                text: "twitter/iggy",
                url: "https://twitter.com/iggy"
            },
        ]
    }

    return new Response(JSON.stringify(user))
    // console.log(new NextResponse.json(user))
    // return new NextResponse.json(user)

}