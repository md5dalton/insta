import ProfilePhoto from "../components/elements/ProfilePhoto"

export default ({ id, name, thumb, hasNew, size=64 }) => (
    <div>
        <ProfilePhoto
            url={`/story/${id}`}
            src={thumb}
            alt=""
            width={size}
            height={size}
            hasNew={hasNew}
        />
        <p style={{width: size}} className="text-xs pt-1 truncate">{name}</p>
    </div>
)