const posts = [
    {
      id: 1,
      owner: {
        name: "Iggy Azalea",
        username: "iggyiz",
        picture: "/images/iggy/profile.jpg"
      },
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
        },
        {
          url: "/images/iggy/image-3.jpg",
          width: 434,
          height: 500
        },
        {
          url: "/images/iggy/image-4.jpg",
          width: 1024,
          height: 1280
        }
      ],
      caption: "hello world",
      tags: [
        {
          id: 1,
          name: "beatiful people"
        },
        {
          id: 2,
          name: "curiosity"
        }
      ],
      timestamp: "1 hour ago"
    }
  ]
  
export default function handler(req, res) {
    res.status(200).json(posts)
}
  // const res = await fetch("http://localhost:8000/api/posts", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer 19|Nn2GB5Pc6qXZOYbBSphj0FI1o8J0oC0uOMgfaeeh`
  //   }
  // })