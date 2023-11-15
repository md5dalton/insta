"use client"
import { ArrowLeftIcon, ChevronLeftIcon } from "@heroicons/react/24/solid"
import { useRouter } from "next/navigation"

export default () => {

    const router = useRouter()

    return (
        <button onClick={() => router.back()}>
            <ChevronLeftIcon className="h-6 w-6"/>
        </button>
    )
}