import Link from "next/link"
import Icon from "./Icon"

export default ({ href, icon }) => (
    <Link href={href} className="py-2 grid place-items-center">
        <Icon name={icon} />
    </Link> 
)