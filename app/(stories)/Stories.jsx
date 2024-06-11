import { getStories } from "@/actions/stories"
import LoadMore from "./LoadMore"

export default async () => {
    
    const data = await getStories()

    return (
        <ul className="flex gap-x-2 w-full px-4 overflow-x-scroll">
            {data}
            <LoadMore />
        </ul>

    )
}