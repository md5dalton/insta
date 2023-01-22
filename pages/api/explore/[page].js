import { shuffle } from "../../../utils/functions"

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

const gReel = () => ({
    reel: true,
    id: 1,
    thumb: shuffle(images).pop()
})
const gPost = () => ({
    post: true,
    id: 1,
    thumb: shuffle(images).pop(),
    stats: {
        images: 3
    }
})

const gPosts = () => [[
    gPost(),
    gPost()
]]
const gReels = () => [[
    gReel()
]]

export default function handler(req, res) {
 
    const { page } = req.query

    const media = [
        gPosts(),
        gPosts(),
            gReels(),
        gPosts(),
        gPosts(),
        gPosts(),
            gReels(),
        gPosts(),
        gPosts(),
        gPosts(),
        gPosts(),
        gPosts(),
        // gPosts(),
        // gPosts(),
            // gReels(),
    ]
    

    res.status(200).json({
        media,
        page,
        end: false
    })
}