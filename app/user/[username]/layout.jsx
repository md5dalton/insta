"use client"
import ProfilePhoto from "@/components/elements/ProfilePhoto"
import Stats from "./Stats"
import Button from "@/components/elements/Button"
import TabLinks from "./TabLinks"
import useFetch from "@/hooks/useFetch"
import Info from "./Info"

export default ({ children, params: {username} }) => {

    const { data, isLoading, error } = useFetch(`/user/${username}`)

    return isLoading ? <p>loading</p> : error ? <p>error</p> : 
        (
        <div className="pt-4">
            <Info {...data.user} />
            <div>{children}</div>
        </div>
    )
}