import Media from "./Media.js"

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
        
        this.media = this.#files.map(({ path }) => {

            const media = new Media(path)

            return media
            
        })
        
    }

}