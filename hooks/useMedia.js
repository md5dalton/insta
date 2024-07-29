import { API } from "../utils/constants"
import { fetcher } from "../utils/functions"
import useSWRInfinite from "swr/infinite"

export default (path) => {
    
    const url = `/api/${path}/`
    
    const { 
        data, error, mutate, size, 
        setSize, isValidating 
    } = useSWRInfinite(index => url + index, fetcher, { revalidateAll: false, revalidateFirstPage: false })
    
    const { end } = data ? data[0] : {} 
    const isLoadingInitialData = !data && !error
    const isLoadingMore =
        isLoadingInitialData ||
        (size > 0 && data && typeof data[size - 1] === "undefined")
    
    let media = []

    if (data) data.map(arr => {
        media = media.concat(...arr.media)
    })
    
    return {
        media: media,
        isLoading: isLoadingMore,
        end,
        error,
        loadmore: () => setSize(size + 1)
    }
}