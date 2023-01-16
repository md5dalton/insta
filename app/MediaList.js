"use client"

import { Waypoint } from "react-waypoint"
import List from "../components/List"
import Post from "../components/Post"
import usePosts from "../hooks/usePosts"

export default ({ path }) => {

    const { 
        posts, error, isLoading, end,
        loadmore
    } = usePosts(path)

    const loadmoreHandler = () => !end && !isLoading ? loadmore() : 0

    const itemHandler = (item, index) => <li key={index}><Post {...item} /></li> 

    const empty = <div className="container grid justify-center">no posts were found</div>
    
    return (
        <div className="media-list pt-4 pb-8">
            { posts.length ? <>
                <List className="grid gap-4" items={posts} empty={empty} itemHandler={itemHandler} />
                <Waypoint 
                    onEnter={loadmoreHandler}
                    bottomOffset="-600px"
                    />
            </> : "" }
            { error && <div>error</div> }
            { isLoading && <div>loading</div> }
            { end && <div>end reached</div> }
        </div>
    )
}