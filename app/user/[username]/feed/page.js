import MediaList from "../../../MediaList"

export default ({ params: { username } }) => (
    <div className="feed">
        <MediaList path={`/user/${username}/posts`} />
    </div>
)