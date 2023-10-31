import UList from "../UList"
import Image from "./Image"
import Video from "./Video"

export default ({ media }) => (
    <UList
        className="flex overflow-x-scroll snap-x snap-mandatory"
        itemHandlerProps={{
            className: "grid justify-center shrink-0 w-full snap-start snap-always"
        }}
        items={media}
        itemHandler={media => media.video ? <Video {...media} /> : <Image {...media} />}
    />
)