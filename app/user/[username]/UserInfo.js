import Profile from "../../../components/Profile"
import { fetchAPI } from "../../utils"

export default async () => {

    const { data, error } = await fetchAPI("/user/dalii")

    return (
        <div className="container py-4 user-info">
            <div className="profile-wrapper">
                <Profile {...data} size={77} />
            </div>
            <div className="bio">
                <div className="description">user description</div>
            </div>
        </div>
    )
}