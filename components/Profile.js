import Image from "next/image"
import Button from "./Button"
import Icon from "./icon"

export default ({ children, username, picture }) => {
    return (
        <div className="profile flex items-center gap-x-4">
            <Image
                className="rounded-full shrink-0"
                src={picture}
                alt={username}
                width={80}
                height={80}
                style={{objectFit: "cover", height: 80}}
            />
            <div className="details grid gap-4">
                <div className="name flex items-center gap-x-4">
                    <div className="username">{username}</div>
                    <div className="context-menu">
                        <Button>
                            <Icon name="ellipsis" />
                        </Button>
                        <div className="menu"></div>
                    </div>
                </div>
                {children && <div className="other">{children}</div>}
            </div>
        </div>
    )
}