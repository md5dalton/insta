import Image from "next/image"
import Link from "next/link"

export default ({ id }) =>  (
    <Link href={`/reel/${id}`} className="grid bg-white/50 row-span-2">
        <Image
            className="row-span-full col-span-full h-full w-full object-cover"
            src={`/api/thumb/5So3sLIu`}
            alt="reel tile"
            width={100}
            height={100}
        />
        <div className="row-span-full col-span-full" />
    </Link>
)