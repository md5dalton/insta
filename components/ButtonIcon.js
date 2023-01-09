import Button from "./Button"
import Icon from "./icon"

export default ({ name, ...props }) => (
    <Button {...props}>
        <Icon name={name} />
    </Button>
)