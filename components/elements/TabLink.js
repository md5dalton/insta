import Link from "next/link"
import Icon from "./Icon"

export default ({ icon, href }) => (
    <Link href={href} className="py-4 text-center" >
        <Icon name={icon} />
    </Link>
)