import Stats from "./Stats"
import Story from "./Story"
import TabLinks from "./TabLinks"
import UserInfo from "./userInfo"

export default function ({ children, params: {username} }) {

    const url = `/user/${username}/`

     return (
        <div className="user">
            <UserInfo />
            <div className="stories flex w-full py-5 overflow-x-auto">
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
            </div>
            <div className="stats-tabs">
                <Stats />
                <TabLinks url={url} />
            </div>
            <div className="media">{children}</div>
        </div>
    )
}