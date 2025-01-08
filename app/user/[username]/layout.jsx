import User from "./User"

export default async ({ children, params }) => {

    const { username } = await params

    return <User username={username}>{children}</User>

}