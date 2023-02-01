import LinkIcon from "../../../components/elements/LinkIcon"

export default ({ username }) => (
    <header className="sticky top-0 z-50 container bg-black flex items-center line-b py-1">
        <LinkIcon icon="chevron-left" href="/" />
        <p className="grow text-center font-bold" href="/">{username}</p>
    </header>
)