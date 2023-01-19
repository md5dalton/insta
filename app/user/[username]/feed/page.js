import Feed from "../../../Feed"

export default ({ params: { username } }) => (
    <div className="feed">
        <Feed path={`/user/${username}/feed`} />
    </div>
)