"use client"
import Button from "@/components/elements/Button"
import Feed from "./(feed)/Feed"
import Header from "./Header"
import { signIn } from "next-auth/react"
// import Stories from "./(stories)/Stories"

export default () => (
    <div className="home">
        <Header />
        {/* <div className="py-3 line-b"> */}
            {/* <Stories /> */}
        {/* </div> */}
        <Feed path="/feed" />
    </div>
)