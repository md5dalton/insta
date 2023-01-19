import Link from "next/link"
import Icon from "../../../components/elements/Icon"

export default ({ icon, href }) => (
    <Link href={href} className="py-3 text-center grow" >
        <Icon name={icon} />
    </Link>
)