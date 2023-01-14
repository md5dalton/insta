export default function handler(req, res) {
    
    const { username } = req.query
  
    const user = {
        name: "Iggy Azalea",
        username: username,
        picture: "/images/iggy/profile.jpg"
    }
    
    res.status(200).json(user)
  }