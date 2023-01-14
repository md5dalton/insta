import Image from "next/image"
import { useRouter } from "next/router"
import ContextMenu from "../../components/ContextMenu"
import DynamicContent from "../../components/DynamicContent"
import Layout from "../../components/layout/Layout"
import useUser from "../../hooks/useUser"

export default () => {
  
    const router = useRouter()

    const { username } = router.query

    const { user, ...rest } = useUser(username)

    const { picture, name } = user ? user : {}

    return (
        <Layout
            title="Md5dalton"
            description="Md5 dalton"
        >
            <div className="container py-4 user-info">
                <div className="profile-wrapper">
                    <DynamicContent {...rest} >
                        { user &&
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
                                    {/* {children && <div className="other">{children}</div>} */}
                                </div>
                                <ContextMenu></ContextMenu>
                            </div>
                        }
                    </DynamicContent>
                </div>
                <div className="bio">
                    <div className="description">user description</div>
                </div>
            </div>
            <div className="stories"></div>
            <div className="stats-tabs">
                <div className="stats"></div>
                <div className="tabs"></div>
            </div>
            <div className="media-lists"></div>
        </Layout>
    )
}
  