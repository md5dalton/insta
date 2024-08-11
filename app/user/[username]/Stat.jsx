export default ({ name, value }) => (
    <div className="text-center font-semibold grow py-3">
        <div>{value}</div>
        <div className="text-white/50">{name}</div>
    </div>
)