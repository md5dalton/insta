import UserInfo from "./userInfo"

export default function ({ children, params: {username} }) {
  return (
    <div className="user">
        <UserInfo />
        <div className="stories">stories</div>
        <div className="stats-tabs">
            <div className="stats">stats</div>
            <div className="tabs">
                tablinks
                {/* <TabLink href="feed" icon="user" /> */}
            </div>
        </div>
        <div className="media-lists">{children}</div>
    </div>
  )
}
