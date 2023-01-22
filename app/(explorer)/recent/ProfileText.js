import Image from "next/image"
import Link from "next/link"
import Button from "../../../components/elements/Button"
import Icon from "../../../components/elements/Icon"

export default ({ username, name, picture, size = 40 }) => (
    <div className="profile flex items-center gap-x-4 py-2">
        <Link 
            className={
                `rounded-full 
                grid place-items-center 
                shrink-0 
                h-[${size}px] 
                w-[${size}px] 
                border-white/20
                border`
            }
            href={`/search/${username}`}
        >
            <Icon name="magnifier" size="text-sm" />
        </Link>
        <div className="details grid gap-4 grow">
            <div className="name flex items-center gap-x-4">
                <Link href={`/search/${username}`} className="username font-semibold">{name}</Link>
            </div>
        </div>
        <Button>
            <Icon name="cross2" size="text-xs font-bold" />
        </Button>
    </div>
)