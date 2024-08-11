import { UserIcon } from "@heroicons/react/24/outline"
import TabLink from "./TabLink"

export default ({ user }) => {

    const url = `/user/${user}/`

    return (
        <div className="flex justify-around text-white/50 font-bold">
            <TabLink href={url + "posts"}>
                <UserIcon height={32} />
            </TabLink>
            <TabLink href={url + "reels"}>
                <UserIcon height={32} />
            </TabLink>
            <TabLink href={url + "tags"}>
                <UserIcon height={32} />
            </TabLink>
        </div>
    )
}