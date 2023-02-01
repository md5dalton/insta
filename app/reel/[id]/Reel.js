import Player from "./Player"

export default ({ height, ...props}) => (
    <div
        style={{height: height}} 
        className="reel grid snap-end snap-always">
        <Player {...props} />
    </div>
)