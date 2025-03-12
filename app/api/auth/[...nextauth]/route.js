import NextAuth from "next-auth"
// import Credentials from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        // Credentials({
        //     name: "MPLUS",
        //     credentials: {
        //         username: { label: "Username", type: "text" },
        //         password: { label: "Password", type: "password" }
        //     }, 
        //     async authorize(credentials, req) {

        //         const res = await fetch(`${process.env.NEXT_PUBLIC_API}/auth`, {
        //             method: "POST",
        //             body: JSON.stringify(credentials),
        //             headers: { "Content-Type": "application/json" }
        //         })

        //         const user = await res.json()

        //         return res.ok && user ? user : null
                
        //     }
        // })
    ],
    secret: process.env.NEXTAUTH_SECRET,

})

export { handler as GET, handler as POST }