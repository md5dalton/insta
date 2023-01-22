import Image from "next/image"
import Link from "next/link"
import Button from "../../../components/elements/Button"
import Icon from "../../../components/elements/Icon"

export default ({ username, name, picture, size = 40 }) => (
    <div className="profile flex items-center gap-x-4 py-2">
        <Link href={`/user/${username}`}>
            <Image
                className="rounded-full shrink-0"
                src={picture}
                alt={username}
                width={size}
                height={size}
                style={{objectFit: "cover", height: size}}
            />
        </Link>
        <div className="details grid gap-4 grow">
            <div className="name flex items-center gap-x-4">
                <Link href={`/user/${username}`} className="username font-semibold">{name}</Link>
            </div>
        </div>
        <Button>
            <Icon name="cross2" size="text-xs font-bold" />
        </Button>
    </div>
)