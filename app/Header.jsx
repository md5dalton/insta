import Link from "next/link"
import Icon from "../components/elements/Icon"

const LinkIcon = ({ href, icon }) => (
    <Link href={href} className="pt-3 pb-4 grid place-items-center">
        <Icon name={icon} />
    </Link> 
)

export default () => (
    <header className="sticky top-0 z-50 container bg-black flex items-center">
        <LinkIcon icon="focus" href="/create" />
        <Link className="grow text-center font-bold tracking-wider" href="/">LETLAPA</Link>
        <LinkIcon icon="paper-plane" href="/share" />
    </header>
)