import Image from "next/image"
import Link from "next/link"
import ContextMenu from "./ContextMenu"

export default ({ children, username, name, picture }) => (
    <div className="profile flex items-center gap-x-4 py-2">
        <Link href={`/user/${username}`}>
            <Image
                className="rounded-full shrink-0"
                src={picture}
                alt={username}
                width={40}
                height={40}
                style={{objectFit: "cover", height: 40}}
            />
        </Link>
        <div className="details grid gap-4 grow">
            <div className="name flex items-center gap-x-4">
                <Link href={`/user/${username}`} className="username">{name}</Link>
            </div>
            {children && <div className="other">{children}</div>}
        </div>
        <ContextMenu></ContextMenu>
    </div>
)