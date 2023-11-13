import { NextResponse } from "next/server"

export async function GET(request, { params: { username, page } }) {
    console.log(username, page)

    // return NextResponse({
    //     media: [],
    //     page,
    //     end: true

    // })
    return new Response(JSON.stringify({
        media: [],
        page,
        end: true
    }), { status: 200 })

}