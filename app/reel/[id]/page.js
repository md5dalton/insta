import Reels from "./Reels"

export default ({ params: { id } }) => (
    <div className="reels">
        <Reels path={`/reel/${id}`} />
    </div>
)