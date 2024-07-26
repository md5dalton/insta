import NavLink from "./NavLink"

export default ({ children, className, ...props }) => (
    <NavLink className={`py-4 grid place-items-center ${className}`} {...props}>
        {children}
    </NavLink>
)