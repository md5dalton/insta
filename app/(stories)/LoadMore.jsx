import { getStories } from "@/actions/stories"
import LoadMore from "@/components/LoadMore"

export default () => <LoadMore handler={getStories} />