"use client"
import Button from "@/components/elements/Button"
import { signIn } from "next-auth/react"

export default () => (
    <Button
        onClick={() => signIn("google")}
        className="border-[1px] py-2 px-4 mx-auto my-4"
    >login with google</Button>

)