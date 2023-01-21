import { shuffle } from "../../../../utils/functions"

const owner = {
  name: "Iggy Azalea",
  username: "iggyiz",
  picture: "/images/iggy/profile.jpg"
}

const videos = [
  "/videos/vid.mp4",
  "/videos/vid2.mp4",
  "/videos/vid3.mp4",
  "/videos/vid4.mp4",
  "/videos/vid5.mp4"
]

export default function handler(req, res) {
  const { page } = req.query

  const media = [1,2,3,4,5].map(i => ({
    id: `page${page}:item${i}`,
    owner,
    video: shuffle(videos).pop()
  }))

  res.status(200).json({
    media,
    page,
    end: false
  })
}