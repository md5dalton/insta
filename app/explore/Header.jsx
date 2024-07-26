"use client"

import { useState } from "react"
import IconButton from "@/components/IconButton"
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline"

export default () => {
    
    const [focused, setFocused] = useState(false)

    return (
        <header className="flex items-center px-4 bg-very-dark-grey gap-4 py-4">
            <div className={focused ? "hidden" : ""}>
                <MagnifyingGlassIcon height={24} />
            </div>
            <div className="flex items-center grow bg-dark-grey px-4 rounded-lg">
                <IconButton className={`py-0${focused ? "" : " hidden"}`}>
                    <XMarkIcon height={20} />
                </IconButton>
                <input
                    type="text"
                    placeholder="Search"
                    className="grow bg-transparent outline-none h-8 px-4"
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                />
            </div>
        </header>
    )
}