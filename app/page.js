import Feed from "./Feed"
import Header from "./Header"

export default () => (
    <div className="home pt-4">
        <Header />
        <div>stories</div>
        <div className="home-feed pt-4">
            <Feed path="/feed" />
        </div>
    </div>
)