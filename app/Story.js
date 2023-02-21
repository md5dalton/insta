import ProfilePhoto from "../components/elements/ProfilePhoto"

export default ({ id, name, thumb, hasNew }) => (
    <div>
        <ProfilePhoto
            url={`/story/${id}`}
            src={thumb}
            alt=""
            size="M"
            hasNew={hasNew}
        />
        <p style={{width: 56}} className="text-xs pt-1 truncate">{name}</p>
    </div>
)