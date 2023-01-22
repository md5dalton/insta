import Link from "next/link"
import Recent from "./Recent"

export default () => (
    <div className="recent container">
        <div className="flex items-center justify-between">
            <div className="font-bold">Recent</div>
            <Link href="/search" className="text-xs font-semibold text-blue-800">See All</Link>
        </div>
        <Recent />
    </div>
)