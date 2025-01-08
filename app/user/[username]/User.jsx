"use client"
import useFetch from "@/hooks/useFetch"
import Info from "./Info"

export default ({ children, username }) => {

    const { data, isLoading, error } = useFetch(`/user/${username}`)

    return isLoading ? <p>loading</p> : error ? <p>{error.message}</p> : 
        (
        <div className="pt-4">
            <Info {...data.user} />
            <div>{children}</div>
        </div>
    )
}