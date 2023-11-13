import { MediaCarouselProvider } from "@/context/MediaCarousel"
import ButtonIcon from "../elements/ButtonIcon"
import Profile from "../Profile"
import UList from "../UList"
import MediaCarousel from "./MediaCarousel"

export default ({ owner: { path, ...rest }, caption, media, tags = [], timestamp }) => (
    <div className="post">
        <MediaCarouselProvider>
            <div className="container">
                <Profile {...{...rest, name: path.split("/").pop()}} />
            </div>
            <MediaCarousel media={media} />
            <div className="container grid gap-y-2">
                <div className="mt-4 relative grid items-center">
                    <UList
                        className="absolute flex gap-1 justify-center w-full"
                        items={media}
                        itemHandler={item => <div className="bg-white h-[5px] w-[5px] rounded-full"></div>}
                    />
                    <div className="flex justify-between">
                        <div className="flex gap-x-5">
                            <ButtonIcon name="heart" />
                            <ButtonIcon name="enter-down" />
                            <ButtonIcon name="lock" />
                        </div>
                        <ButtonIcon name="bookmark2" />
                    </div>
                    

                </div>
                {   caption &&
                    <div className="caption flex gap-2">
                        <span className="username">{owner.name}</span>
                        <p className="caption-text">{caption}</p>
                    </div>
                }
                <UList
                    className="flex gap-x-2 mt-2"
                    items={tags}
                    itemHandler={({ name }) => <span className="text-blue-500">#{name}</span>}
                />
                <div className="text-xs text-gray-500">{timestamp}</div>
            </div>
        </MediaCarouselProvider>
    </div>
)