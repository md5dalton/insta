import { API } from "../utils/constants"
import { fetcher } from "../utils/functions"
import useSWRInfinite from "swr/infinite"

const PAGE_SIZE = 3

export default (path) => {
    
    const url = `${API}${path}/`
    
    const { 
        data, error, mutate, size, 
        setSize, isValidating 
    } = useSWRInfinite(index => url + index, fetcher)
    
    const { end } = data ? data[0] : {} 
    const isLoadingInitialData = !data && !error
    const isLoadingMore =
        isLoadingInitialData ||
        (size > 0 && data && typeof data[size - 1] === "undefined")
    const isEmpty = data?.[0]?.length === 0
    const isReachingEnd =
        isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE)
    const isRefreshing = isValidating && data && data.length === size

    let posts = []

    if (data) data.map(arr => {
        posts = posts.concat(...arr.posts)
    })
    
    return {
        posts: posts,
        isLoading: isLoadingMore,
        end,
        error,
        loadmore: () => setSize(size + 1)
    }
}

// return (
//     <div className="container">
//       <center>
//         <h1>Post</h1>
//       </center>

//       {posts.map((post) => {
//         return (
//           <div className="card mb-2" key={post.id}>
//             <div className="card-body">{post.title}</div>
//           </div>
//         );
//       })}

//       <center>
//         <button
//           className="btn btn-primary"
//           disabled={isLoadingMore || isReachingEnd}
//           onClick={() => setSize(size + 1)}
//         >
//           {isLoadingMore
//             ? "Loading..."
//             : isReachingEnd
//             ? "No More Post"
//             : "Load More"}
//         </button>
//       </center>
//     </div>
//   );
// }    
// const url = API + "/posts/" + page
// console.log(url)
// const { data, error, isLoading } = useSWR(url, fetcher)