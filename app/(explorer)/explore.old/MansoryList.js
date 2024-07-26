"use client"
import InfiniteScroll from "react-infinite-scroller"
import useMedia from "../../../hooks/useMedia"
import PostTile from "../../PostTile"
import ReelTile from "../../ReelTile"

const Col = ({ groups }) => (
    <div className="col flex flex-col gap-[3px] justify-evenly">
        {
            groups.map((item, index) => (
                <li key={index}>{

                    item.reel ? 
                    <ReelTile {...item} /> : 
                    <PostTile {...item} />
            
                }</li>
            ))
        }
    </div>
)

export default () => {

    const { 
        media, error, isLoading, end,
        loadmore
    } = useMedia("/explore")
    
    const loadmoreHandler = page => !end && !isLoading ? loadmore() : 0

    return (
        <InfiniteScroll
            loadMore={loadmoreHandler}
            hasMore={!end}
            className="grid grid-cols-3 gap-[3px]"
            threshold={600}
            element="ul"
        >{
            media.map((item, index) => <Col groups={item} key={index} />)
        }</InfiniteScroll>
    )
}