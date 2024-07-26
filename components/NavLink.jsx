"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default ({ children, activeClassName = "text-blue-500", className, ...props }) => {
    const pathname = usePathname()
    const active = pathname === props.href 

    return (
        <Link {...props} className={`${className}${active ? " " + activeClassName : ""}`} >
            {children}
        </Link>
    )
}