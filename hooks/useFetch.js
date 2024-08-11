import { API } from "../utils/constants"
import { fetcher } from "../utils/functions"

export default async path => {
    
    const { data, error, isLoading } = useSWR(API + path, fetcher)

    return {
        data,
        isLoading,
        error
    }
}