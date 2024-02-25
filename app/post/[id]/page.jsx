import Feed from "@/app/Feed"

export default ({ params: { id } }) => (
    <div className="posts">
        <Feed path={`/post/${id}`} />
    </div>
)