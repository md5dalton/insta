import { setVideo } from "@/signals/video"
import Link from "next/link"
import { useRef } from "react"
import { Waypoint } from "react-waypoint"

export default ({ reel: { id } }) => {

    const video = useRef()
    
    return (
        <Waypoint
            scrollableAncestor="window"
            onEnter={()=>setVideo(video.current)}
            onLeave={()=>console.log("leave", id)}
        >
            <Link href={`/reel/${id}`}>
                <video
                    ref={video}
                    poster={`/api/thumb/${id}`}
                    // autoPlay
                    muted
                    className="row-span-full col-span-full"
                    src={`/api/stream/${id}`}
                />
                <div className="overlay row-span-full col-span-full flex flex-col">
                    <div className="controls grow"></div>
                    {/* <Indicators items={images} current={index} /> */}
                </div>
            </Link>
        </Waypoint>
    )
}