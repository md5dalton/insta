"use client"
import InfiniteScroll from "react-infinite-scroller"
import useMedia from "../hooks/useMedia"

export default ({ mediaHandler, path, ...props }) => {

    const { 
        media, error, isLoading, end,
        loadmore
    } = useMedia(path)
    
    const loadmoreHandler = page => !error && !end && !isLoading ? loadmore() : 0

    return (
        <InfiniteScroll
            loadMore={loadmoreHandler}
            hasMore={!end}
            element="ul"
            {...props}
        >
            {
                media.map((item, index) => (
                    <li key={index} className="shrink-0">{mediaHandler(item)}</li>
                    ))
            }
        </InfiniteScroll>
    )
}