import Posts from "./Posts"

export default ({ params: { username } }) => (
    <div className="default-user-media-list">
        <Posts path={`/user/${username}/posts`} />
    </div>
)