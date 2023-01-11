import Image from "next/image"
import ButtonIcon from "./elements/ButtonIcon"
import ContextMenu from "./ContextMenu"
import ImageViewer from "./ImageViewer"
import List from "./List"

const Profile = ({ children, username, picture }) => {
    return (
        <div className="profile flex items-center gap-x-4 py-2">
            <Image
                className="rounded-full shrink-0"
                src={picture}
                alt={username}
                width={40}
                height={40}
                style={{objectFit: "cover", height: 40}}
            />
            <div className="details grid gap-4 grow">
                <div className="name flex items-center gap-x-4">
                    <div className="username">{username}</div>
                </div>
                {children && <div className="other">{children}</div>}
            </div>
            <ContextMenu></ContextMenu>
        </div>
    )
}

export default ({ owner, caption, images, tags, timestamp }) => {

    return (
        <div className="post">
            <div className="container">
                <Profile {...owner} ></Profile>
            </div>
            <div className="images">
                <ImageViewer images={images} />
            </div>
            <div className="container mt-2 grid gap-y-2">
                <div className="icon-buttons flex gap-x-5">
                    <div><ButtonIcon name="heart" /></div>
                    <div><ButtonIcon name="enter-down" /></div>
                    <div><ButtonIcon name="lock" /></div>
                    <div className="grow grid justify-end"><ButtonIcon name="bookmark2" /></div>
                </div>
                {   caption &&
                    <div className="caption flex gap-2">
                        <span className="username">{owner.name}</span>
                        <p className="caption-text">{caption}</p>
                    </div>
                }
                <List
                    className="flex gap-x-2"
                    items={tags}
                    itemHandler={({ id, name }) => <li key={id}>#{name}</li>}
                />
                <div>{timestamp}</div>
            </div>
            
        </div>
    )
}