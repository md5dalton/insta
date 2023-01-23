import Player from "./Player"

export default props => (
    <div className="reel grid h-screen snap-end snap-always">
        <Player {...props} />
    </div>
)