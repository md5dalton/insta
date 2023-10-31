import Image from "next/image"

export default ({ id, width, height }) => (
   <>
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
   </>
)