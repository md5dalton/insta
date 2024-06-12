import Image from "next/image"
import Link from "next/link"
import Icon from "../components/elements/Icon"
import { getImageUrl } from "@/utils/functions"

const TileStat = ({ name, value }) => (
    <div className="flex gap-1 justify-center items-center font-bold ">
        <Icon name={name} size="text-xl" />
        <div>{value}</div>
    </div>
)

export default ({ picture, id }) => {
    
    const size = "calc(100vw / 3)"

    return (
        <div className="post-tile grid">
            <img
                src={getImageUrl(picture)}
                className="row-span-full col-span-full"
                style={{objectFit: "cover", height: size, width: size}}
            />
            {/* <Image
                className="row-span-full col-span-full"
                src={`/api/media/${picture}`}
                alt="post tile"
                width={100}
                height={100}
                style={{objectFit: "cover", height: size, width: size}}
            /> */}
            <Link href={`/post/${id}`} className="row-span-full col-span-full grow-0 bg-black/50 p-2 font-bold opacity-0 transition-all hover:opacity-100">
                <div className="flex justify-end">
                    <Icon name="user" size="text-xl" />
                </div>
                <div className="grid gap-y-2 pt-2">
                    <TileStat name="user" value="3,832" />
                    <TileStat name="play-circle" value="87" />
                </div>
            </Link>
            
        </div>
    )
}