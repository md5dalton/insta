import Videos from "./Videos"

export default ({ params: { username } }) => (
    <div className="tags">
        <Videos path={`/user/${username}/videos`} />
    </div>
)