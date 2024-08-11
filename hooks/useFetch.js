import useSWR from "swr"
import { API } from "../utils/constants"
import { fetcher } from "../utils/functions"

export default path => useSWR(API + path, fetcher)