"use client"

import { Waypoint } from "react-waypoint"

export default ({ id, src }) => {


    return (
        <>
            <Waypoint
                fireOnRapidScroll={false}
                // onEnter={({ previousPosition, currentPosition }) => console.log("enter", id, previousPosition, currentPosition)}
                // onLeave={({ previousPosition, currentPosition }) => console.log("leave", id, previousPosition, currentPosition)}
                // onPositionChange={() => console.log("position")}
                // bottomOffset="-100px"
            >
                <video
                    className="w-full h-full my-auto"
                    src={src}
                    // autoPlay
                    // muted
                    loop
                    controls={false}
                ></video>
            </Waypoint>
        </>
    )
}
