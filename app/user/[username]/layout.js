import TabLink from "../../../components/elements/TabLink"
import UserInfo from "./userInfo"

export default function ({ children, params: {username} }) {

    const url = `/user/${username}/`

     return (
        <div className="user">
            <UserInfo />
            <div className="stories">stories</div>
            <div className="stats-tabs">
                <div className="stats">stats</div>
                <div className="
                    grid grid-cols-3
                    border-y-gray-500 border-y-2"
                >
                    <TabLink href={`${url}feed`} icon="user" />
                    <TabLink href={`${url}reels`} icon="play-circle" />
                    <TabLink href={`${url}tags`} icon="user" />
                </div>
            </div>
            <div className="media">{children}</div>
        </div>
    )
}