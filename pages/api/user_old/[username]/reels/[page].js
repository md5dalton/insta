import { shuffle } from "../../../../../utils/functions"

const owner = {
  name: "Iggy Azalea",
  username: "iggyiz",
  picture: "/images/iggy/profile.jpg"
}

const images = [
  "/images/iggy/image-4.jpg",
  "/images/iggy/image-1.jpg",
  "/images/iggy/image-2.jpg",
  "/images/iggy/image-3.jpg",
]

export default function handler(req, res) {
  const { page } = req.query

  const media = [1,2,3,4,5,6,7,8,9,0].map(i => ({
    id: `page${page}:item${i}`,
    thumb: shuffle(images).pop(),
    stats: {
      views: "107k"
    },
    owner: owner
  }))

  res.status(200).json({
    media,
    page,
    end: false
  })
}