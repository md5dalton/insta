import ButtonIcon from "../components/elements/ButtonIcon"

export default () => (
    <footer className="
        line-t
        w-full
        grid
        grid-cols-5
        fixed
        bottom-0
        bg-black
        font-bold"
    >
        <ButtonIcon className="pt-3 p-4" name="home2" />
        <ButtonIcon className="pt-3 p-4" name="magnifier" />
        <ButtonIcon className="pt-3 p-4" name="clapboard-play" />
        <ButtonIcon className="pt-3 p-4" name="heart" />
        <ButtonIcon className="pt-3 p-4" name="user" />
    </footer>
)