import { API } from "../utils/constants"
import { fetcher } from "../utils/functions"
import useSWR from "swr"

export default (username) => {
    
    const url = API + "/user/" + username

    const { data, error, isLoading } = useSWR(url, fetcher)

    return {
        user: data,
        isLoading,
        error
    }
}