import Image from "next/image"
import { ReactImageCarouselViewer } from "react-image-carousel-viewer"
import ButtonIcon from "./ButtonIcon"
import ContextMenu from "./ContextMenu"
import ImageViewer from "./ImageViewer"

const Profile = ({ children, username, picture }) => {
    return (
        <div className="profile container flex items-center gap-x-4 py-2">
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

export default ({ owner, post }) => {

    const images = post.images.map(image => ({
        src: image
    }))

    return (
        <div className="post">
            <Profile {...owner} ></Profile>
            <div className="images">
                <ImageViewer images={post.images} />
            </div>
            <div className="container icon-buttons grid grid-cols-4">
                <ButtonIcon name="heart" />
                <ButtonIcon name="enter-down" />
                <ButtonIcon name="lock" />
                <ButtonIcon name="bookmark2" className="justify-self-end" />
            </div>
            
        </div>
    )
}