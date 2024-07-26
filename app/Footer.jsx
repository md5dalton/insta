import IconLink from "@/components/IconLink"
import { FilmIcon, HeartIcon, HomeIcon, MagnifyingGlassIcon, PlusCircleIcon } from "@heroicons/react/24/outline"

export default () => (
    <footer className="w-full fixed bottom-0 bg-very-dark-grey flex px-4 justify-between py-1">
        <IconLink href="/">
            <HomeIcon height={24} />
        </IconLink>
        <IconLink href="/explore">
            <MagnifyingGlassIcon height={24} />
        </IconLink>
        <IconLink href="/create">
            <PlusCircleIcon height={28} />
        </IconLink>
        <IconLink href="/reels">
            <FilmIcon height={24} />
        </IconLink>
        <IconLink href="/activity">
            <HeartIcon height={24} />
        </IconLink>
    </footer>
)