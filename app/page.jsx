import Feed from "./Feed"
import Header from "./Header"
import Stories from "./Stories"

export default () => (
    <div className="home">
        <Header />
        <div className="py-3 line-b">
            <Stories path="/stories" />
        </div>
        <Feed path="/feed" />
    </div>
)