"use client"
import Post from "@/components/Post/Post"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import UList from "@/components/UList"
import { useAppDispatch } from "@/hooks/useStore"
import { useListFeedPostsQuery } from "@/services/api"
import { useSelector } from "react-redux"
import { addData, setPage } from "@/store/pagination/paginationSlice"
import Button from "@/components/elements/Button"

export default () => {

    const dispatch = useAppDispatch() 
    
    const { currentPage, cumulativeData, scrollPosition } = useSelector(state => state.pagination)

    const { data, error, isLoading } = useListFeedPostsQuery(currentPage)

    useEffect(() => {
        
        if (data?.media ) dispatch(addData({page: currentPage, data: data.media}))

    }, [data, dispatch, currentPage])

    const handlePageChange = newPage => dispatch(setPage(newPage))
    
    // const { ref, inView } = useInView()

    // useEffect(() => {
    //     if (inView) handlePageChange(currentPage+1)
    // }, [inView])

    // useEffect(() => {
        // console.log(scrollPosition, indicator.current)
        // window.scrollTo(0, scrollPosition)
    // }, [indicator])

    // useEffect(() => {
    //     console.log(scrollPosition)
    //     // window.scrollTo(0, scrollPosition)
    // }, [scrollPosition])

    // useEffect(() => {
        
    //     const handleScroll = debounce(() => dispatch(setScrollPostion(window.scrollY)))

    //     window.addEventListener("scroll", handleScroll)

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll)
    //     }
    // }, [])

    // console.log(cumulativeData)

    return (
        error ? <p>error</p> :
        isLoading ? <p>loading</p> :
        <UList
            items={Object.values(cumulativeData).flat()}
            itemHandler={item => <Post {...item} />}
        >
            <Button
                onClick={() => handlePageChange(currentPage+1)}
                className="border-[1px] py-2 px-4 mx-auto my-4"
            >load more</Button>
            {/* <div ref={ref} /> */}
        </UList>
    )
}