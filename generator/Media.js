
export default class Media
{

    path

    constructor (path, stats, metadata) {
        
        const { birthtime } = stats
        const { height, width } = metadata
        
        this.path = path

        this.height = height
        this.width = width
        this.mktime = birthtime
        this.portrait = height > width
        // this.type = "image"

    }

}