import fs from "fs/promises"
import sharp from "sharp"
import { encode, isVideo } from "../utils.js"

export default class Media
{

    ownerId
    path
    id

    #realPath

    constructor (path, owner, ownerPath) {
        
        this.#realPath = path

        this.id = encode(path)
        this.path = path.replace(ownerPath.split("<").shift(), "")
        this.ownerId = owner.id
        
    }

    getRealPath () {
        return this.#realPath
    }

    isVideo () {
        return isVideo(this.#realPath)
    }

    async getMetadata () {

        const { height, width } = !this.isVideo() ?
            await sharp(this.#realPath).metadata() :
            { height: 0, width: 0 }
    
        this.height = height
        this.width = width

        this.portrait = height > width

    }

    async getInfo () {

        const { birthtime } = await fs.stat(this.#realPath)
        
        this.mktime = birthtime

    }

}