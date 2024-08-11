import NavLink from "@/components/NavLink"

export default ({ href, children }) => (
    <NavLink href={href} className="p-2" activeClassName="text-white" >
        {children}
    </NavLink>
)