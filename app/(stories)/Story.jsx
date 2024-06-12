import Image from "next/image"
import Link from "next/link"

export default ({ id, name, picture, hasNew = true }) => (
    <Link href={`/stories/${id}`} className="shrink-0 grid w-24 gap-1">
        <div className={`${hasNew ? "accent-ring " : ""}rounded-full p-1`}>
            <div className="h-24 w-24 rounded-full border-4 border-black">
                <Image
                    height={96}
                    width={96}
                    src={`/api/media/${picture}`}
                    alt=""
                    className="object-cover rounded-full w-full h-full"
                />
            </div>
        </div>
        <p className="text-xs text-center truncate">long ass name {name}</p>
    </Link>
)