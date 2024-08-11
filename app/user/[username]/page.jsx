import { redirect } from "next/navigation"

export default ({ params: { username } }) => redirect(`/user/${username}/reels`)