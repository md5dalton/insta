import { shuffle } from "../../../../utils/functions"

export default function handler(req, res) {
    
    const { username } = req.query
    
    const user = {
        name: "Mpho Mothae",
        hasNew: shuffle([false, true]).pop(),
        username: username,
        picture: "/images/iggy/profile.jpg",
        category: "Personality",
        description: "This is my official Letlapa account. Follow me and keep up to date of what I am up to.",
        links: [
            {
                text: "whatsapp/me",
                url: "https://whatsapp.me/234322"
            },
            {
                text: "linktr.ee/iggy",
                url: "https://linktr.ee/iggy"
            },
            {
                text: "twitter/iggy",
                url: "https://twitter.com/iggy"
            },
        ]
    }
  
    res.status(200).json({user})
  }