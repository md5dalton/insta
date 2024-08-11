import ProfilePhoto from "@/components/elements/ProfilePhoto"
import { getImageUrl } from "@/utils/functions"
import Stats from "./Stats"
import Button from "@/components/elements/Button"
import TabLinks from "./TabLinks"

export default ({ id, name, picture, stats, owner }) => (
    <div className="p-4 space-y-4">
        <div className="flex items-center gap-10">
            <ProfilePhoto
                url={false}
                src={getImageUrl(picture)}
                alt=""
                size="L"
                hasNew={true}
            />
            <Stats values={stats} />
        </div>
        <div className="space-y-4">
            <div className="space-y-[2px]">
                <p className="font-bold">{name}</p>
                <p className="text-white/50">{owner.name}</p>
            </div>
            <div>
                <Button>Follow</Button>
            </div>
        </div>
        <TabLinks user={id} />
    </div>
)