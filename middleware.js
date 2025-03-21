import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export async function middleware(req) {

    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

    const loginPath = "/login"

    const { pathname } = req.nextUrl

    if (pathname.startsWith(loginPath) || pathname.startsWith("/_next")) return NextResponse.next()
    
    // if (!token) {

    //     const loginUrl = new URL(loginPath, req.url)
        
    //     loginUrl.searchParams.set("callbackUrl", req.url)
        
    //     return NextResponse.redirect(loginUrl)

    // }

    return NextResponse.next()

}

// Specify the paths where middleware should run
export const config = {
    matcher: ["/:path*"]
}
