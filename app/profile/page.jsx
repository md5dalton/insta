"use client"
import Button from "@/components/elements/Button"
import { signOut, useSession } from "next-auth/react"

export default () => {

    const { data: session } = useSession()
    
    return (
        <div>
            <h1>Profile {session?.user?.name}</h1>
            <Button
                onClick={() => signOut({callbackUrl: "/"})}
                className="border-[1px] py-2 px-4 mx-auto my-4"
            >sign out</Button>
        </div>
    )
}