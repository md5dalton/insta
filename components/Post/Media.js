import { useMediaCarousel } from "@/context/MediaCarousel"
import { useInView } from "react-intersection-observer"
import Image from "./Image"
import Video from "./Video"

export default props => {

    const {setInView} = useMediaCarousel()

    const [ref, inView] = useInView({
        threshold: 1,
        onChange: inView => inView ? setInView(props) : 0
    })

    return (
        <div ref={ref}>
            {props.reel ?  <Video {...props} /> : <Image {...props} />}
        </div>
    )
}