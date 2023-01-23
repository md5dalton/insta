import Button from "../../../components/elements/Button"
import ButtonIcon from "../../../components/elements/ButtonIcon"
import Icon from "../../../components/elements/Icon"
import Profile from "../../../components/Profile"
import StatButton from "./StatButton"

export default ({ id, owner, muteHandler, isMuted }) => (
    <div className="overlay row-span-full col-span-full p-4 flex flex-col">
        <div className="header flex items-center justify-between">
            <div className="uppercase font-bold">reels</div>
            <div>
                <Icon name="camera2" />
            </div>
        </div>
        <Button
            onClick={muteHandler}
            className="grow pt-[40%] opacity-0 active:opacity-100 transition-opacity"
        >
            <div className="bg-black/50 p-4 rounded-full">
                <Icon name={isMuted ? "volume-medium" : "mute"} /> 
            </div>
        </Button>
        <div className="action-buttons grid items-end">
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
)