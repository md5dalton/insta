import Image from "next/image"

export default ({ name, thumb }) => (
    <div className="w-[60px] text-center shrink-0">
        <Image
            className="rounded-full"
            src="/images/iggy/profile.jpg"
            alt=""
            width={56}
            height={56}
            style={{objectFit: "cover", height: 56}}
        />
        <div className="pt-2 truncate">playing lakers</div>
    </div>
)