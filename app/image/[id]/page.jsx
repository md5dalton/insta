import Image from "next/image"

export default ({ params: { id } }) => (
    <div className="fixed bg-black h-full w-full z-10">
        <Image
            alt=""
            // className="z-10"
            src={`/api/media/${id}`}
            fill
            objectFit="contain"
        />
    </div>
)