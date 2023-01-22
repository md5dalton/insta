"use client"
import InfiniteList from "../../InfiniteList"
import Profile from "./Profile"
import ProfileText from "./ProfileText"

export default () => {

    const mediaHandler = media => media.user ? 
        <Profile {...media} /> :
        <ProfileText {...media} />

    return (
        <InfiniteList
            className="pt-4"
            path="/recent"
            threshold={1000}
            mediaHandler={mediaHandler}
        />
    )
}