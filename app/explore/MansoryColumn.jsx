import List from "@/components/List"
import ReelTile from "./ReelTile"
import PostTile from "./PostTile"

export default  ({ items }) => (
    <List
        style={{height: "calc(200vw / 3)"}}
        className="grid gap-[3px] grid-rows-2"
        items={items}
        itemHandler={item => item.reel ? <ReelTile key={item.id} {...item} /> : <PostTile key={item.id} {...item} /> }
    />
)