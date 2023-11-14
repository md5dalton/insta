import { useMediaCarousel } from "@/context/MediaCarousel"
import UList from "../UList"

export default ({ media }) => {

    const { inView } = useMediaCarousel()
    
    return (
        <UList
            className="absolute flex gap-1 justify-center w-full"
            items={media}
            itemHandler={({ id }) => <div className={`${inView.id === id ? "bg-blue-500" : "bg-white" } h-[5px] w-[5px] rounded-full`}></div>}
        />
    )
}