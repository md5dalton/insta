"use client"
import { useState } from "react"
import Button from "../../../components/elements/Button"
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
export default ({ id, owner, video }) => {
    
    const [ mute, setMute ] = useState(false)

    // const toggleMute = () => setMute(!mute)

    return (
        <div className="reel grid h-screen snap-end snap-always">
            <div className="player z-0 row-span-full col-span-full bg-white/10 grid items-center">
                <Videoplayer id={id} src={video} />
            </div>
            <div className="overlay row-span-full col-span-full p-4 flex flex-col">
                <div className="header flex items-center justify-between">
                    <div className="uppercase font-bold">reels</div>
                    <div>
                        <Icon name="camera2" />
                    </div>
                </div>
                <Button className="grow pt-[40%] opacity-0 active:opacity-100 transition-opacity">
                    <div className="bg-black/50 p-4 rounded-full">
                        <Icon name={mute ? "volume-medium" : "mute"} /> 
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
        </div>
    )
}