import Link from "next/link"
import ContextMenu from "./ContextMenu"
import ProfilePhoto from "./elements/ProfilePhoto"

export default ({ children, username, name, picture, size = 40 }) => (
    <div className="profile flex items-center gap-x-4 py-4">
        <ProfilePhoto
            url={`/user/${username}`}
            src={picture}
            alt={username}
            width={size}
            height={size}
        />
        <div className="details grid gap-4 grow">
            <div className="name flex items-center gap-x-4">
                <Link href={`/user/${username}`} className="username font-semibold">{name}</Link>
            </div>
            {children && <div className="other">{children}</div>}
        </div>
        <ContextMenu></ContextMenu>
    </div>
)