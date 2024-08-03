import Image from "next/image"
import Link from "next/link"
import { getImageUrl } from "@/utils/functions"
import { RectangleStackIcon, VideoCameraIcon } from "@heroicons/react/24/solid"

export default ({ thumb, id, hasReel, hasMany }) =>  (
    <Link
        href={`/post/${id}`}
        className="grid bg-white/50 row-span-1 overflow-hidden"
    >
        <Image
            className="row-span-full col-span-full h-full w-full object-cover object-top"
            src={getImageUrl(thumb)}
            alt=""
            width={100}
            height={100}
        />
        <div className="row-span-full col-span-full grid justify-end p-1">
            {
                hasReel ? <VideoCameraIcon height={24} /> :
                hasMany ? <RectangleStackIcon height={23} /> :
                ""
            }
        </div>
    </Link>
)