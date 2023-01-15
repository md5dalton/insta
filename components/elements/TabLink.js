import Link from "next/link"
import Icon from "./Icon"

export default ({ icon, href }) => (
    <Link href={href}>
        <Icon name={icon} />
    </Link>
)