import { API } from "@/utils/constants"
import { fetcher } from "@/utils/functions"
import useSWRInfinite from "swr/infinite"

export default (path, initialSize) => {
    
    const url = `${API}${path}/`
    
    const { 
        data, error, isValidating, isLoading, size, 
        setSize, mutate  
    } = useSWRInfinite(index => url + index, fetcher, {initialSize})

    const isLoadingInitialData = !data && !error

    let end = true
    
    let media = []
    
    if (data) {
        for (const item of data) for (const i of item.media) media.push(i) 
        end = data[size - 1]?.end
    }

    return {
        media,
        size,
        error,
        loadmore: () => !isLoading && !error && !isLoadingInitialData ? setSize(size + 1) : null
    }
}