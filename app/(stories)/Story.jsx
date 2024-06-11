import ProfilePhoto from "@/components/elements/ProfilePhoto"

export default ({ id, name, picture, hasNew }) => (
    <div className="shrink-0">
        <ProfilePhoto
            url={`/story/${id}`}
            src={`/api/media/${picture}`}
            alt=""
            size="M"
            hasNew={hasNew}
        />
        <p style={{width: 56}} className="text-xs pt-1 truncate">{name}</p>
    </div>
)