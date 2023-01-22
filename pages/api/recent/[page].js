const gText = val => ({
    text: true,
    username: val.replace(" ", "+"),
    name: val
})

const gUser = () => ({
    user: true,
    username: "lesotho",
    name: "Lesotho Gov",
    picture: "/images/iggy/image-3.jpg"
})

export default function handler(req, res) {
 
    const { page } = req.query

    const media = [
        gUser(),
        gText("kick starter"),
        gUser(),
        gUser(),
        gText("slayy"),
        gUser(),
        gUser(),
        gUser(),
        gUser(),
        gUser(),
    ]

    res.status(200).json({
        media,
        page,
        end: true
    })
}