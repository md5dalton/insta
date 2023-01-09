import Layout from '../components/Layout'
import List from '../components/List'
import Post from '../components/Post'

const posts = [
  {
    id: 1,
    owner: {
      name: "Iggy Azalea",
      username: "iggyiz",
      picture: "/images/iggy/profile.jpg"
    },
    post: {
      id: 1,
      images: [
        {
          url: "/images/iggy/image-1.jpg",
          width: 352,
          height: 499
        },
        {
          url: "/images/iggy/image-2.jpg",
          width: 375,
          height: 469
        }
      ]
    }
  }
]

export default function Home() {
  return (
    <Layout
      title="Instakram"
      description="Instagram clone app using Nextjs and tailwindcss"
    >
      <List
        className="posts"
        items={posts}
        itemHandler={ item => <li key={item.id}><Post {...item} /></li> }
      />
    </Layout>
  )
}
