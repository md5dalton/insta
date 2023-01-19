import Image from "next/image"
import Link from "next/link"
import Icon from "../../../../components/elements/Icon"

const TileStat = ({ name, value }) => (
    <div className="flex gap-1 items-center text-xs">
        <Icon name={name} size="text-sm" />
        <div>{value}</div>
    </div>
)

export default ({ thumb, id }) => {
    
    const size = "calc(100vw / 3)"

    return (
        <div className="video-tile grid">
            <Image
                className="row-span-full col-span-full"
                src={thumb}
                alt="video tile"
                width={100}
                height={100}
                style={{objectFit: "cover", height: size, width: size}}
            />
            <Link href={`/reel/${id}`} className="row-span-full col-span-full grow-0 bg-black/50 p-2 font-bold opacity-0 transition-all hover:opacity-100">
                <div className="grid h-full items-end">
                    <TileStat name="play-circle" value="596k" />
                </div>
            </Link>
            
        </div>
    )
}