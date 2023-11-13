import { useMediaCarousel } from "@/context/MediaCarousel"
import UList from "../UList"
import Media from "./Media"

export default ({ media }) => {
    
    const { getCurrent } = useMediaCarousel()

    return (
        <div className="relative">
            <div className="absolute bg-black/50 rounded-xl top-4 right-4 w-10 h-6 grid place-items-center text-xs font-bold">
                <p>{getCurrent(media) || 1}/{media.length}</p>
            </div>
            <UList
                className="flex overflow-x-scroll snap-x snap-mandatory"
                itemHandlerProps={{
                    className: "grid justify-center shrink-0 w-full snap-start snap-always"
                }}
                items={media}

                itemHandler={media => <Media {...media} />}
            />
        </div>
    )
}