import { redirect } from "next/navigation"

export default async ({ params }) => {

    const { username } = await params

    // redirect(`/user/${username}/reels`)

}