import { shuffle } from "../../../../utils/functions"

const usernames = [
  "red",
  "green",
  "blue"
]
const owner = () => ({
  name: "Iggy Azalea",
  username: shuffle(usernames).pop(),
  picture: "/images/iggy/profile.jpg"
})

const videos = [
  {
    video: true,
    url: "/videos/vid.mp4",
    width: 720,
    height: 1280
  },
  {
    video: true,
    url: "/videos/vid2.mp4",
    width: 576,
    height: 1024
  },
  {
    video: true,
    url: "/videos/vid3.mp4",
    width: 720,
    height: 1280
  },
  {
    video: true,
    url: "/videos/vid4.mp4",
    width: 720,
    height: 1280
  },
  {
    video: true,
    url: "/videos/vid5.mp4",
    width: 576,
    height: 1024
  },
]

const image4 = {
  image: true,
  url: "/images/iggy/image-4.jpg",
  width: 1024,
  height: 1280
}
const image1 = {
  image: true,
  url: "/images/iggy/image-1.jpg",
  width: 352,
  height: 499
}
const image2 = {
  image: true,
  url: "/images/iggy/image-2.jpg",
  width: 375,
  height: 469
}
const image3 = {
  image: true,
  url: "/images/iggy/image-3.jpg",
  width: 434,
  height: 500
}

const t1 = {
  id: 1,
  name: "beatiful people"
}
const t2 = {
  id: 2,
  name: "curiosity"
}
const images = [image1, image2, image3, image4]
const tags = [t1, t2]

export default function handler(req, res) {
  const { page } = req.query

  const media = [1,2,3,4,5,6,7,8,9,0].map(i => ({
    id: `page${page}:item${i}`,
    owner: owner(),
    media: shuffle([...videos, ...images]).slice(0, 4),
    tags,
    timestamp: `${page}${i} day ago`
  }))

  res.status(200).json({
    media,
    page,
    end: false
  })
}