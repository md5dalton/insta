"use client"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useRef, useState } from "react"
import Button from "../../components/elements/Button"
import Icon from "../../components/elements/Icon"

export default () => {

    const input = useRef(null)
    
    const router = useRouter()

    const pathname = usePathname()

    const [ focused, setFocused ] = useState(false)

    const focusHandler = () => {
        setFocused(true)
        router.push("/recent")
    }
    const blurHandler = () =>  setFocused(false)

    const searchHandler = ev => {
        ev.preventDefault()
        
        const term = ev.target.value
        
        if (term) router.push(`/search/${term.replaceAll(" ", "+")}`)

    }

    const reset = () => input.current.value = ""

    return (
        <form className="container header flex items-center gap-4 py-4">
            <Link
                href="/explore" 
                className={`${pathname === "/explore" ? "hidden" : ""}`}
            >
                <Icon name="arrow-left" />
            </Link>
            <div className="flex items-center gap-4 grow bg-white/20 h-9 px-4 rounded-xl">
                <Icon 
                    name="magnifier" 
                    size={`text-sm font-semibold${pathname === "/explore" ? "" : " hidden"}`}
                />
                <input
                    onFocus={focusHandler}
                    onBlur={blurHandler}
                    onChange={searchHandler}
                    ref={input}
                    type="text" 
                    placeholder="Search" 
                    className="grow bg-transparent outline-none"
                />
                <Button
                    onClick={() => reset()}
                    className={`${pathname.includes("/search") ? "" : "hidden"}`}
                >
                    <Icon name="cross2" size="text-sm font-semibold" />
                </Button>
            </div>
        </form>
    )
}