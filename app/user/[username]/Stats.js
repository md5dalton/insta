import Stat from "./Stat"

export default () => (
    <div className="flex line-t">
        <Stat name="posts" value={200} />
        <Stat name="followers" value="2,292" />
        <Stat name="following" value={14} />
    </div>
)