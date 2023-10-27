import Media from "./Media.js"
import { group } from "./utils.js"

export default class Post
{

    path
    media = []
    
    #files = []

    constructor (path, files) {
        this.path = path
        this.#files = files
    }


    createMedia () {
        
        this.media = this.#files.map(({ path, stats, metadata }) => {

            const media = new Media(path, stats, metadata)

            return media
            
        })
        
    }

}