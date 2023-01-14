import { Waypoint } from 'react-waypoint'
import Layout from '../components/layout/Layout'
import List from '../components/List'
import Post from '../components/Post'
import usePosts from '../hooks/usePosts'

// export default ({ posts, error, isLoading, end, loadmore }) => {
export default () => {

    const { 
        posts, error, isLoading, end,
        loadmore
    } = usePosts()

    const loadmoreHandler = () => !end && !isLoading ? loadmore() : 0

    const itemHandler = (item, index) => (
        <li key={index}>
            <Post {...item} />
        </li> 
    )

    const empty = <div className="container grid justify-center">no posts were found</div>

    return (
        <Layout
            title="Instakram"
            description="Instagram clone app using Nextjs and tailwindcss"
        >
            <section onClick={loadmoreHandler} className="posts pt-4 pb-8">
                { posts.length ? <>
                    <List className="grid gap-4" items={posts} empty={empty} itemHandler={itemHandler} />
                    <Waypoint 
                        onEnter={loadmoreHandler}
                        // onLeave={()=>console.log("leave")}
                        // onPositionChange={()=>console.log("position")}
                        bottomOffset="-600px"
                    />
                </> : "" }
                { error && <div>error</div> }
                { isLoading && <div>loading</div> }
                { end && <div>end reached</div> }
            </section>
        </Layout>
    )
}
