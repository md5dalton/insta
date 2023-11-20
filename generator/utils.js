import crypto from "crypto"
import path from "path"
import { fileTypeFromFile } from "file-type"

export const group = (items, fn) => {

    const grouped = {}

    items.forEach(item => {
    
        const key = fn(item)

        if (!grouped[key]) grouped[key] = {
            directory: key,
            items: []
        }
        
        grouped[key].items.push(item)

    })
    
    const values = Object.values(grouped)

    return values

}

export const chunk = (array, size) => {

    const chunked = []
    
    for (let i = 0; i < array.length; i += size) chunked.push(array.slice(i, i + size))
    
    return chunked

}

export const encode = str => {
    
    const hash = crypto.createHash("sha256").update(str).digest("hex")

    const base64Hash = Buffer.from(hash, "hex").toString("base64")

    return base64Hash.replace(/[^a-zA-Z0-9]/g, "").substring(0, 8)

}

export const connect = ({ id }) => ({
    connect: {
        id: id
    }
})

export const isVideo = file => {

    const ext = path.extname(file)

    return ["mp4"].includes(ext.toLowerCase().replace(".", ""))

    // const type = await fileTypeFromFile(path)
    
    // return type.mime.startsWith("video/")
    
}