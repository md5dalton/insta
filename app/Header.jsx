"use client"
import Link from "next/link"
import { Bars3Icon, UserIcon } from "@heroicons/react/24/outline"
import IconButton from "@/components/IconButton"
import { useSession } from "next-auth/react"
import Image from "next/image"

export default () => {

    const { data: session } = useSession()
    
    return (
        <header className="sticky top-0 z-50 container bg-very-dark-grey flex items-center py-1">
            <Link className="text-lg font-bold tracking-wider" href="/">LETLAPA</Link>
            <div className="grow flex gap-6 justify-end items-center">
                {
                    session ?
                    <Link className="bg-white rounded-full h-8 w-8" href="/profile">
                        <Image
                            src={session?.user?.image}
                            alt="profile image"
                            // layout="fill"
                            // objectFit="cover"
                            width={32}
                            height={32}
                            className="rounded-full"
                        />
                    </Link> :
                    <IconButton>
                        <UserIcon height={24} />
                    </IconButton>
                }
                <IconButton>
                    <Bars3Icon height={24} />
                </IconButton>
            </div>
        </header>
    )
}