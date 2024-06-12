import { getPosts } from "@/actions/feed"
import LoadMore from "@/components/LoadMore"

export default () => <LoadMore handler={getPosts} />