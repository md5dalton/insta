import Image from "next/image"
import Link from "next/link"

export default ({ id, width, height }) => (
   <Link href={`/image/${id}`}>
        <Image
            alt=""
            className="row-span-full col-span-full"
            src={`/api/media/${id}`}
            width={width}
            height={height}
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