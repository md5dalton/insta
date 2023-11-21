import Player from "./Player"

export default ({ height, id, owner}) => (
    <div
        style={{height: height}} 
        className="reel grid snap-end snap-always">
        <Player src={`/api/stream/${id}`} owner={owner} />
    </div>
)