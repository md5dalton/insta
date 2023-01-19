import Reels from "./Reels"

export default ({ params: { username } }) => (
    <div className="reels">
        <Reels path={`/user/${username}/reels`} />
    </div>
)