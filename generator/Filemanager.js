import fs from "fs/promises"
import sharp from "sharp"
import { find } from "./finder.js"
import { connect, encode, group, isVideo } from "./utils.js"
import SuperCollection from "./SuperCollection.js"
import Ffmpeg from "fluent-ffmpeg"
import Media from "./models/Media.js"
import Reel from "./models/Reel.js"

export default class Filemanager
{

    #files = []
    #ext = []

    superCollections = []

    rootCollections = []
    collections = []
    users = []
    posts = []
    reels = []
    medias = []
    tags = []
    
    constructor (path, ext) {
        this.path = path
        this.#ext = ext
    }

    async findFiles () {
        
        const files = await find(this.path, this.#ext)

        // console.log(files[0], isVideo(files[0]))

        // const proc = Ffmpeg.ffprobe(files[0], (err, metadata) => {
        //     if (err) {
        //       console.error('Error reading video metadata:', err);
        //       return;
        //     }
          
        //     // Display video details
        //     console.log('Video Duration:', metadata.format.duration + ' seconds');
        //     console.log('Video Format:', metadata.format.format_name);
        //     console.log('Video Resolution:', metadata.streams[0].width + 'x' + metadata.streams[0].height);
        //     console.log('Video Codec:', metadata.streams[0].codec_name);
        // })

        await Promise.all(
            files.map(async item => {
                
                const video = isVideo(item)

                this.#files.push({
                    path: item,
                    video,
                    stats: await fs.stat(item),
                    metadata: video ? {width: 0, height: 0} : await sharp(item).metadata()
                })
            })
        )

    }

    async createSuperCollections () {

        console.log("finding files")
        await this.findFiles()

        const superCollections = group(this.#files, ({ path: pathname }) => this.path + "/" + pathname.replace(this.path + "/", "").split("/").shift())
        
        this.superCollections = superCollections.map(({ directory, items }) => {

            const superCollection = new SuperCollection(directory, items)
            
            superCollection.createCollections()

            return superCollection
            
        })
    }

    createModels () {

        this.superCollections.forEach(({ collections, path: superCollectionPath }) => {

            const superCollection = {
                id: encode(superCollectionPath),
                name: superCollectionPath.split("/").pop(),
                path: superCollectionPath.replace(this.path, "")
            }

            this.rootCollections.push(superCollection)
            
            collections.forEach(({ users, path: collectionPath }) => {

                const collection = {
                    id: encode(collectionPath),
                    name: collectionPath.split("/").pop(),
                    path: collectionPath.replace(superCollectionPath, ""),
                    ownerId: superCollection.id
                }

                const tag = {
                    id: collection.id,
                    name: collection.path.replace("/", "")
                }

                this.collections.push(collection)
                this.tags.push(tag)

                users.forEach(({ posts, path: userPath }) => {

                    const user = {
                        id: encode(userPath),
                        name: userPath.split("/").pop(),
                        path: userPath.replace(collectionPath, ""),
                        ownerId: collection.id
                    }

                    this.users.push(user)

                    posts.forEach(({ media: medias, path: postPath }) => {
                        
                        const post = {
                            id: encode(postPath),
                            path: postPath.replace(userPath, ""),
                            ownerId: user.id
                        }

                        this.posts.push(post)

                        medias.forEach(({ path: mediaPath }) => {
                            
                            const media = new Media(mediaPath, post, postPath)

                            this.medias.push(media)

                            
                            if (media.isVideo()) {
                                
                                const reel = new Reel(mediaPath, user, postPath)
                                
                                this.reels.push(reel)

                                if (!post.picture) post.picture = `t:${reel.id}`
                                
                            } else {

                                if (!post.picture) post.picture = `m:${media.id}`
                                
                            }

                            
                        })
                        
                        if (!user.picture) user.picture = post.picture

                    })

                })

            })
        })

    }

}