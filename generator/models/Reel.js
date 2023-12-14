import Media from "./Media.js"
import ffmpeg from "fluent-ffmpeg"
import { path as ffmpegPath } from "@ffmpeg-installer/ffmpeg"
import { path as ffprobePath } from "@ffprobe-installer/ffprobe"

ffmpeg.setFfmpegPath(ffmpegPath)
ffmpeg.setFfprobePath(ffprobePath)

export default class Reel extends Media
{
    #path

    mediaId

    constructor (path, owner, ownerPath) {
        super(path, owner, ownerPath)

        this.mediaId = this.id

    }

    async generateThumb () {

        const filename = `${this.id}.jpg`

        ffmpeg(this.getRealPath())
            .screenshots({
                count: 1,
                folder: "s:/thumbs",
                filename
            })
            .on("end", () => {
                // this.picture = filename
                // console.log("thumb generated")
            })

    }

}