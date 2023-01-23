import Link from "next/link"
import ButtonIcon from "../components/elements/ButtonIcon"

export default () => (
    <header className="container bg-black flex items-center">
        <ButtonIcon className="py-3" name="focus" />
        <Link className="grow text-center font-bold tracking-wider" href="/">LETLAPA</Link>
        <ButtonIcon className="py-3" name="paper-plane" />
    </header>
)