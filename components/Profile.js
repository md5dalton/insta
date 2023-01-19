import Image from "next/image"
import Link from "next/link"
import ContextMenu from "./ContextMenu"

const Profile = ({ children, username, name, picture, size }) => (
    <div className="profile flex items-center gap-x-4 py-4">
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
            {children && <div className="other">{children}</div>}
        </div>
        <ContextMenu></ContextMenu>
    </div>
)

Profile.defaultProps = {
    size: 40
}

export default Profile