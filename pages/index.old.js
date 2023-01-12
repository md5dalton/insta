import Layout from '../components/layout/Layout'
import List from '../components/List'
import Post from '../components/Post'


export default function Home({ posts }) {
  console.log(posts)
  return (
    <Layout
      title="Instakram"
      description="Instagram clone app using Nextjs and tailwindcss"
    >
      {/* <List
        className="posts"
        items={posts}
        itemHandler={ item => <li key={item.id}><Post {...item} /></li> }
      /> */}
    </Layout>
  )
}

// export async function getStaticProps() {

//   const res = await fetch("http://localhost:3000/api/posts")
  
//   // The value of the `props` key will be
//   //  passed to the `Home` component
//   return {
//     props: {
//       // posts: []
//       posts: res.json()
//     }
//   }
// }
