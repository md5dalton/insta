import Player from "./Player"

export default ({ id, owner}) => (
    <div
        // style={{height: height}} 
        className="reel grid snap-end snap-always h-full grid-rows-1">
        <Player src={`/api/stream/${id}`} owner={owner} />
    </div>
)