import TabLink from "./TabLink"

export default ({ url }) => (
    <div className="flex line-t text-white/20 font-bold">
        <TabLink href={`${url}posts`} icon="grid" />
        {/* <TabLink href={`${url}feed`} icon="page-break" /> */}
        <TabLink href={`${url}reels`} icon="clapboard-play" />
        <TabLink href={`${url}videos`} icon="play-circle" />
        <TabLink href={`${url}tags`} icon="user-plus" />
    </div>
)