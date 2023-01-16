import MediaList from "../../MediaList"

export default ({ params: { username } }) => (
    <div className="default-media-list">
        <MediaList path={`/user/${username}/posts`} />
    </div>
)