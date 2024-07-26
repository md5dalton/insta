import Link from "next/link"
import { Bars3Icon, UserIcon } from "@heroicons/react/24/outline"
import IconButton from "@/components/IconButton"

export default () => (
    <header className="sticky top-0 z-50 container bg-very-dark-grey flex items-center py-1">
        <Link className="text-lg font-bold tracking-wider" href="/">LETLAPA</Link>
        <div className="grow flex gap-6 justify-end">
            <IconButton>
                <UserIcon height={24} />
            </IconButton>
            <IconButton>
                <Bars3Icon height={24} />
            </IconButton>
        </div>
    </header>
)