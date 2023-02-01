import Stats from "./Stats"
import TabLinks from "./TabLinks"
import Stories from "../../Stories"
import Header from "./Header"
import Info from "./Info"

export default function ({ children, params: {username} }) {

    const url = `/user/${username}/`

     return (
        <>
            <Header username={username} />
            <div className="pt-2">
                <Info />
                <div className="h-36 grid items-center">
                   <Stories path={`${url}stories`} />
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