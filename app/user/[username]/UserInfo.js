import Image from "next/image"
import ContextMenu from "../../../components/ContextMenu"
import { fetchAPI } from "../../utils"

export default async () => {

    const { data, error } = await fetchAPI("/user/dalii")

    // console.log(data, error)

    const { picture, username, name } = data

    return (
        <div className="container py-4 user-info">
            <div className="profile-wrapper">
                <div className="profile flex items-center gap-x-4 py-2">
                    <Image
                        className="rounded-full shrink-0"
                        src={picture}
                        alt={username}
                        width={80}
                        height={80}
                        style={{objectFit: "cover", height: 80}}
                    />
                    <div className="details grid gap-4 grow">
                        <div className="name flex items-center gap-x-4">
                            <div className="username">{name}</div>
                        </div>
                    </div>
                    <ContextMenu></ContextMenu>
                </div>
            </div>
            <div className="bio">
                <div className="description">user description</div>
            </div>
        </div>
    )
}