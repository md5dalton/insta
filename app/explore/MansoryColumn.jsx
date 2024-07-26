import UList from "@/components/UList"
import ReelTile from "../ReelTile"
import PostTile from "../PostTile"

export default  ({ items }) => (
    <UList
        className="col flex flex-col gap-[3px] justify-evenly"
        items={items}
        itemHandler={item => item.reel ? <ReelTile {...item} /> : <PostTile {...item} /> }
    />
)