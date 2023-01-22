"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Button from "../../components/elements/Button"
import ButtonIcon from "../../components/elements/ButtonIcon"
import Icon from "../../components/elements/Icon"

export default () => {
    
    const router = useRouter()

    const [ focused, setFocused ] = useState(false)
    const [ typing, setTyping ] = useState(false)
    const [ hovering, setHovering ] = useState(false)

    const typingHandler = () => setTyping(true)
    
    const focusHandler = () => {
        setFocused(true)
        router.push("/recent")
    }
    const blurHandler = () => {
        setFocused(false)
        setTyping(false)
    }

    return (
        <div className="container header flex items-center gap-4 py-4">
            <Link
                href="/explore" 
                className={`${focused || hovering ? "" : "hidden"}`}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
            >
                <Icon name="arrow-left" />
            </Link>
            <div className="flex items-center gap-4 grow bg-white/20 h-9 px-4 rounded-xl">
                <Icon 
                    name="magnifier" 
                    size={`text-sm font-semibold${focused ? " hidden" : ""}`}
                />
                <input
                    onFocus={focusHandler}
                    onInput={typingHandler}
                    onBlur={blurHandler}
                    type="text" 
                    placeholder="Search" 
                    className="grow bg-transparent outline-none"
                />
                <Button className={`${typing ? "" : "hidden"}`}>
                    <Icon name="cross2" size="text-sm font-semibold" />
                </Button>
            </div>
        </div>
    )
}