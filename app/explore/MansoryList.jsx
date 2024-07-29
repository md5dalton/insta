"use client"
import InfiniteScroll from "react-infinite-scroller"
import MansoryColumn from "./MansoryColumn"
import UList from "@/components/UList"
import useMedia from "@/hooks/useMedia"
import List from "@/components/List"

export default () => {

    // const { 
    //     media, error, isLoading, end,
    //     loadmore
    // } = useMedia("/explore")
    
    // const loadmoreHandler = page => !end && !isLoading ? loadmore() : 0
    
    const post = {picture: "t:sfse", hasMany: true}

    const posts =[]

    const media = []

    for (let index = 0; index < 8; index++) posts.push({id: index, ...post})

    for (let i = 0; i < posts.length; i += 2) media.push(posts.slice(i, i + 2))
    
    media.splice(2, 0, [{id: 0, reel: true}], [{id: 1, reel: true}])
    // console.log(media)
    return (
        <InfiniteScroll
            loadMore={()=>1}
            hasMore={true}
            // threshold={600}
            // element="ul"
        >
            <UList
                className="grid grid-cols-3 gap-[3px]"
                itemHandlerProps={{
                    className: "grid"
                }}
                items={media}
                itemHandler={item => <MansoryColumn items={item} />}
            />
        </InfiniteScroll>
    )
}