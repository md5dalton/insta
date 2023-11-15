import BackButton from "@/components/BackButton"
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid"

export default ({ user }) => (
    <header className="sticky top-0 z-50 container bg-black flex items-center py-2">
        <BackButton />
        <p className="py-2 grow text-center font-bold" href="/">{user.name}</p>
        <EllipsisVerticalIcon className="h-6" />
    </header>
)