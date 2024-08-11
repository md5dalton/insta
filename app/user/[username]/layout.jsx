import ProfilePhoto from "@/components/elements/ProfilePhoto"
import Stats from "./Stats"
import Button from "@/components/elements/Button"
import TabLinks from "./TabLinks"

export default async ({ children, params: {username} }) => {

    const name = "Thobymbhele"
    const stats = [
        {"name": "posts", value: 147},
        {"name": "followers", value: "347K"},
        {"name": "following", value: "2"}
    ]

    return (
        <div className="pt-4">
            <div className="p-4 space-y-4">
                <div className="flex items-center gap-10">
                    <ProfilePhoto
                        url={false}
                        src={"/profile.jpg"}
                        alt=""
                        size="L"
                        hasNew={true}
                    />
                    <Stats values={stats} />
                </div>
                <div className="space-y-4">
                    <div>
                        <p className="font-bold">{name}</p>
                    </div>
                    <div>
                        <Button>Follow</Button>
                    </div>
                </div>
                <TabLinks user={username} />
            </div>
            <div>{children}</div>
        </div>
    )
}