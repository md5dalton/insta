import Link from "next/link"
import Profile from "@/components/Profile"
import UList from "@/components/UList"

export default ({ id, name, picture, category, description, links }) => (
    <div className="container user-info">
        <div className="profile-wrapper">
            <Profile {...{name, id, picture, isLink: false, size: "L"}}/>
        </div>
        <div className="grid gap-[2px]">
            <p className="font-bold">{name}</p>
            <p className="text-white/50">{category.name}</p>
            { description && <p>{description}</p> }
            {
                links && <UList
                    items={links}
                    itemHandler={({ text, url }) => <Link 
                        prefetch={false} 
                        href={url}
                        className="font-semibold text-gray-500"
                    >{text}</Link>}
                />
            }
        </div>
    </div>
)