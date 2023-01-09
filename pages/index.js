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
        itemHandler={(item, index) => <li key={item.id}><Post {...item} /></li> }
      />
    </Layout>
  )
}
