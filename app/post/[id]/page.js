import Feed from "../../Feed"

export default ({ params: { id } }) => (
    <div className="posts">
        <Feed path={`/post/${id}`} />
    </div>
)