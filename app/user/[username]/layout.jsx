import Stats from "./Stats"
import TabLinks from "./TabLinks"
import Stories from "../../(stories)/Stories"
import Header from "./Header"
import Info from "./Info"
import { getUser } from "@/actions/user"

export default async ({ children, params: {username} }) => {

    const user = await getUser(username)
    
    if (!user) return <p>user not found</p>
    
    const userData = {
        name: user.path.split("/").pop(),
        picture: user.picture,
        hasNew: true,
        id: user.id,
        username: user.id,
        category: {
            name: user.owner.path.split("/").pop(),
            id: user.owner.id,
        },
        // description: "This is my official Letlapa account. Follow me and keep up to date of what I am up to.",
        // links: [
        //     {
        //         text: "whatsapp/me",
        //         url: "https://whatsapp.me/234322"
        //     },
        //     {
        //         text: "linktr.ee/iggy",
        //         url: "https://linktr.ee/iggy"
        //     },
        //     {
        //         text: "twitter/iggy",
        //         url: "https://twitter.com/iggy"
        //     },
        // ]
    }

    const url = `/user/${username}/`

    return (
        <>
            <Header user={userData} />
            <div className="pt-2">
                <Info {...userData} />
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