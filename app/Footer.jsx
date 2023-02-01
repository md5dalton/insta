import Link from "next/link"
import Icon from "../components/elements/Icon"

const LinkIcon = ({ href, icon }) => (
    <Link href={href} className="pt-3 pb-4 grid place-items-center">
        <Icon name={icon} />
    </Link> 
)

export default () => (
    <footer className="
        line-t
        w-full
        grid
        grid-cols-5
        fixed
        bottom-0
        h-14
        bg-black
        font-bold"
    >
        <LinkIcon href="/" icon="home2" />
        <LinkIcon href="/explore" icon="magnifier" />
        <LinkIcon href="/reel" icon="clapboard-play" />
        <LinkIcon href="/activity" icon="heart" />
        <LinkIcon href="/user/current" icon="user" />
    </footer>
)