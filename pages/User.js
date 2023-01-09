import Button from "../components/Button"
import Icon from "../components/icon"
import Layout from "../components/Layout"
import Profile from "../components/Profile"

export default function User() {
    return (
      <Layout
        title="Md5dalton"
        description="Md5 dalton"
      >
        <div className="user-info">
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
      </Layout>
    )
  }
  