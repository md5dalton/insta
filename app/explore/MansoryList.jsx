"use client"
import InfiniteScroll from "react-infinite-scroller"
import useMedia from "../../../hooks/useMedia"
import MansoryColumn from "./MansoryColumn"
import UList from "@/components/UList"

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
        >
            <UList
                items={media}
                itemHandler={item => <MansoryColumn items={item} />}
            />
        </InfiniteScroll>
    )
}