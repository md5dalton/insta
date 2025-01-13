"use client"
import Button from "@/components/elements/Button"
import Feed from "./(feed)/Feed"
import Header from "./Header"
import { signIn } from "next-auth/react"
// import Stories from "./(stories)/Stories"

export default () => (
    <div className="home">
        <Header />
        <Button
            onClick={() => signIn("google")}
            className="border-[1px] py-2 px-4 mx-auto my-4"
        >login with google</Button>
        {/* <div className="py-3 line-b"> */}
            {/* <Stories /> */}
        {/* </div> */}
        {/* <Feed path="/feed" /> */}
    </div>
)