import Image from "next/image"
import Link from "next/link"
import Icon from "../components/elements/Icon"

const TileStat = ({ name, value }) => (
    <div className="flex gap-1 items-center text-xs">
        <Icon name={name} size="text-sm" />
        <div>{value}</div>
    </div>
)

export default ({ id }) => {

    const width = "calc(100vw / 3)"
    const height = "calc(100vh / 3)"

    return (
        <div className="reel-tile grid bg-white/50" style={{height, width}}>
            <img
                className="row-span-full col-span-full"
                src={`/api/thumb/${id}`}
                // alt="reel tile"
                width={100}
                height={100}
                style={{objectFit: "cover", height: height, width: width}}
            />
            <Link href={`/reel/${id}`} className="row-span-full col-span-full grow-0 bg-black/50 p-2 font-bold opacity-0 transition-all hover:opacity-100">
                <div className="grid h-full items-end">
                    <TileStat name="play-circle" value="596k" />
                </div>
            </Link>
        </div>
    )
}