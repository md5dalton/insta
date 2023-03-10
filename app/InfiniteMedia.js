"use client"

import { Waypoint } from "react-waypoint"
import useMedia from "../hooks/useMedia"
import UList from "./UList"

export default ({ path, bottomOffset, listClassName, listProps, mediaHandler }) => {

    const { 
        media, error, isLoading, end,
        loadmore
    } = useMedia(path)

    const loadmoreHandler = () => !end && !isLoading ? loadmore() : 0

    const empty = <div className="container grid justify-center">no posts were found</div>
    
    return (
        <div className="infinite-media">
            { media.length ? <>
                <UList
                    className={listClassName}
                    items={media}
                    empty={empty}
                    itemHandler={mediaHandler}
                    {...listProps}
                >
                    <Waypoint 
                        onEnter={loadmoreHandler}
                        bottomOffset={bottomOffset}
                    />
                </UList>
            </> : "" }
            { error && <div>error</div> }
            { isLoading && <div>loading</div> }
            { end && <div>end reached</div> }
        </div>
    )
}