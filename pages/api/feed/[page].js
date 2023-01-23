import { shuffle } from "../../../utils/functions"

const owner = {
  name: "Iggy Azalea",
  username: "iggyiz",
  picture: "/images/iggy/profile.jpg"
}

const image4 = {
  url: "/images/iggy/image-4.jpg",
  width: 1024,
  height: 1280
}
const image1 = {
  url: "/images/iggy/image-1.jpg",
  width: 352,
  height: 499
}
const image2 = {
  url: "/images/iggy/image-2.jpg",
  width: 375,
  height: 469
}
const image3 = {
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
    owner,
    images: shuffle(images), //.sort((a, b) => 0.5 - Math.random()),
    tags,
    timestamp: `${page}${i} day ago`
  }))

  res.status(200).json({
    media,
    page,
    end: true
  })
}