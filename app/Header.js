import ButtonIcon from "../components/elements/ButtonIcon"
import Nav from "../components/Nav"

export default () => (
    <header className="container bg-primary text-slate-400 py-4 flex items-center gap-x-4">
        <ButtonIcon name="menu" />
        <Nav />
        <ButtonIcon name="moon" className="hidden sm:grid" />
        <ButtonIcon name="magnifier" />
    </header>
)