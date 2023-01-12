import ButtonIcon from "./elements/ButtonIcon"

export default ({ children }) => (
    <div className="context-menu">
        <ButtonIcon name="ellipsis" />
        <div className="menu">{children}</div>
    </div>
)