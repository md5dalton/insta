import Image from "next/image"
import Link from "next/link"
import Profile from "../../../components/Profile"
import UList from "../../../components/UList"
import { fetchAPI } from "../../utils"

export default async () => {

    const { data: { user }, error } = await fetchAPI("/user/dalii")

    const {
        name,
        category,
        description,
        links
    } = user

    return (
        <div className="container user-info">
            <div className="profile-wrapper">
                <Profile {...user} isLink={false} size="L" />
            </div>
            <div className="grid gap-[2px]">
                <p className="font-bold">{name}</p>
                <p className="text-white/50">{category}</p>
                <p>{description}</p>
                <UList
                    items={links}
                    itemHandler={({ text, url }) => <Link 
                        prefetch={false} 
                        href={url}
                        className="font-semibold text-gray-500"
                    >{text}</Link>}
                />
            </div>
        </div>
    )
}