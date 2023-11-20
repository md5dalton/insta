
export default class Media
{

    path

    constructor (path, stats, metadata, isVideo) {
        
        const { birthtime } = stats
        const { height, width } = metadata
        
        this.path = path

        this.height = height
        this.width = width
        this.mktime = birthtime
        this.portrait = height > width

        this.isVideo = isVideo

    }

}