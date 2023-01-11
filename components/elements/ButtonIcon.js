import Button from "./Button"
import Icon from "./Icon"

export default ({ name, ...props }) => (
    <Button {...props}>
        <Icon name={name} />
    </Button>
)