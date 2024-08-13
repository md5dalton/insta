import { getAPImedia } from "@/utils/functions"
import Image from "next/image"
import Link from "next/link"

export default ({ id, width, height }) => (
   <Link href={`/image/${id}`}>
        <Image
            alt=""
            className="row-span-full col-span-full"
            src={getAPImedia(id)}
            width={500}
            height={500}
            // style={{
            //     height: "100%",
            //     // width: "100%",
            //     objectFit: "cover"
            // }}
        />
        <div className="overlay row-span-full col-span-full flex flex-col">
            <div className="controls grow"></div>
            {/* <Indicators items={images} current={index} /> */}
        </div>
   </Link>
)