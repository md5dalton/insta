import fs from "fs/promises"
import sharp from "sharp"
import { find } from "./finder.js"
import { connect, encode, group, isVideo } from "./utils.js"
import SuperCollection from "./SuperCollection.js"
import Ffmpeg from "fluent-ffmpeg"

export default class Filemanager
{

    #files = []
    #ext = []

    superCollections = []

    rootCollections = []
    collections = []
    users = []
    posts = []
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
                path: superCollectionPath.replace(this.path, "")
            }

            this.rootCollections.push(superCollection)
            
            collections.forEach(({ users, path: collectionPath }) => {

                const collection = {
                    id: encode(collectionPath),
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

                        medias.forEach(({ path: mediaPath, ...rest }) => {
                            
                            const media = {
                                id: encode(mediaPath),
                                path: mediaPath.replace(postPath.split("<").shift(), ""),
                                ownerId: post.id,
                                ...rest
                            }
    
                            this.medias.push(media)
    
                        })

                        post.picture = encode(medias[0].path)

                    })

                    user.picture = encode(posts[0].media[0].path)

                })

            })
        })

    }

}