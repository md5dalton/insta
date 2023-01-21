import ButtonIcon from "../../../components/elements/ButtonIcon"
import Icon from "../../../components/elements/Icon"
import Profile from "../../../components/Profile"
import Videoplayer from "./Videoplayer"

const StatButton = ({ icon, value }) => (
    <div className="stat-button text-center">
        <ButtonIcon name={icon} />
        <div className="text-xs font-semibold">{value}</div>
    </div>
)
export default ({ id, owner, video }) => (
    <div className="reel grid h-screen snap-end snap-always">
        <div className="player row-span-full col-span-full bg-white/10 grid items-center">
            <Videoplayer id={id} src={video} />
        </div>
        <div className="overlay row-span-full col-span-full p-4 flex flex-col">
            <div className="header flex items-center justify-between">
                <div className="uppercase font-bold">reels</div>
                <div>
                    <Icon name="camera2" />
                </div>
            </div>
            <div className="action-buttons grow grid items-end">
                <div className="buttons grid justify-end gap-4">
                    <StatButton icon="heart" value="234k" />
                    <StatButton icon="bubble" value="87" />
                    <ButtonIcon name="paper-plane" />
                </div>
            </div>
            <div className="details">
                <Profile {...owner} />
                <div>{`reel description: ${id}`}</div>
                <div>audio profile</div>
            </div>
        </div>
    </div>
)