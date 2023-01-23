import ButtonIcon from "../../../components/elements/ButtonIcon";

export default ({ icon, value }) => (
    <div className="stat-button text-center">
        <ButtonIcon name={icon} />
        <div className="text-xs font-semibold">{value}</div>
    </div>
)