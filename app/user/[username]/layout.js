import Stats from "./Stats"
import TabLinks from "./TabLinks"
import Stories from "../../Stories"
import Header from "./Header"
import Info from "./Info"

export default async ({ children, params: {username} }) => {

    const res = await fetch(`${process.env.API}/user/${username}`)

    if (!res.ok) return <p>user not found</p>

    const user = await res.json()

    const url = `/user/${username}/`

    return (
        <>
            <Header user={user} />
            <div className="pt-2">
                <Info {...user} />
                <div className="h-36 grid items-center">
                   {/* <Stories path={`${url}stories`} /> */}
                </div>
                <div className="stats-tabs">
                    <Stats />
                    <TabLinks url={url} />
                </div>
                <div className="media">{children}</div>
            </div>
        </>
    )
}