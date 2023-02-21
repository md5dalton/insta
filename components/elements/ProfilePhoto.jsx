import Image from "next/image"
import Link from "next/link"
// 
// SIZES    S   M   L
// SIZES tw 8   14  24
// SIZES PX 32  56  96
// P     PX 2   2   4


const Photo = ({ hasNew, size, ...props }) => {
    
    const sizes = {S: 32, M: 56, L: 96}
    const paddings = {S: 2, M: 2, L: 4}

    const width = sizes[size]
    const padding = paddings[size]

    return (
        // <span className={`inline-grid rounded-full bg-white/50${hasNew ? " accent-ring" : ""}`} style={{padding: padding}}>
        <span className={`inline-grid rounded-full ${hasNew ? " accent-ring" : ""}`} style={{padding: padding}}>
            <span className={`rounded-full${hasNew ? " bg-black" : ""}`} style={{padding: padding}}>
                <Image
                    {...props}
                    height={width}
                    width={width}
                    style={{height: width, width: width}}
                    // className="bg-white/10 rounded-full border-[1px] border-white/30 object-cover"
                    className="bg-white/10 rounded-full object-cover"
                />
            </span>
        </span>
    )
}

export default ({ url, ...props }) => url ? <Link href={url}><Photo {...props} /></Link> : <Photo {...props} />