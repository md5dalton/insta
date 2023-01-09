import Button from "./Button"
import Icon from "./icon"
import Profile from "./Profile"

export default ({ owner }) => {
    return (
        <div className="post">
            <Profile {...owner} >
                <div className="buttons flex items-center gap-4 flex-wrap">
                    <Button>
                        <span>Follow</span>
                        <Icon name="chevron-down" />
                    </Button>
                    <Button>Message</Button>
                    <Button>
                        <Icon name="user" />
                    </Button>
                </div>
            </Profile>
        </div>
    )
}