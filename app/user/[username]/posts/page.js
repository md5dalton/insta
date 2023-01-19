import Posts from "../Posts"

export default ({ params: { username } }) => (
    <div className="feed">
        <Posts path={`/user/${username}/posts`} />
    </div>
)