import { API } from "../utils/constants"
import { fetcher } from "../utils/functions"
import useSWRInfinite from "swr/infinite"

export default (path, initialSize) => {
    
    const url = `/api/${path}/`
    
    const { 
        data, error, isValidating, isLoading, size, 
        setSize, mutate  
    } = useSWRInfinite(index => url + index, fetcher, {initialSize})

    let end = true
    
    let media = []
    
    if (data) {
        for (const item of data) for (const i of item.media) media.push(i) 
            // console.log([...item.media])
            // media = [...item.media]
        // }
        end = data[size - 1]?.end
        // console.log(data, size)
    }
    return {
        media,
        size,
        error,
        loadmore: () => !isLoading && !error ? setSize(size + 1) : null
    }
}

    // const isLoadingInitialData = !data && !error
    // const isLoadingMore =
    // isLoadingInitialData ||
    // (size > 0 && data && typeof data[size - 1] === "undefined")