import Image from "next/image"
import Link from "next/link"

export default ({ url, height, width, ringWidth = 2, hasNew, ...props }) => (
    <Link href={url}
        className={`rounded-full grid${hasNew ? " accent-ring" : ""}`}
        style={{padding: ringWidth}}
    >

        <Image
            className="
                rounded-full
                border-[3px]
                border-black object-cover"
            {...props}
            height={height}
            width={width}
            style={{height: height, width: width}}
        />
    </Link>
)