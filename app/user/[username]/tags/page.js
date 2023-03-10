import Posts from "../Posts"

export default ({ params: { username } }) => (
    <div className="tags">
        <Posts path={`/user/${username}/tags`} />
    </div>
)