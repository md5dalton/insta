import fs from "fs/promises"
import sharp from "sharp"
import { find } from "./finder.js"
import { encode, group } from "./utils.js"
import SuperCollection from "./SuperCollection.js"

export default class Filemanager
{

    #files = []
    #ext = []

    superCollections = []

    rootCollections = []
    collections = []
    users = []
    posts = []
    media = []
    
    constructor (path, ext) {
        this.path = path
        this.#ext = ext
    }

    async findFiles () {
        
        const files = await find(this.path, this.#ext)

        await Promise.all(
            files.map(async item => this.#files.push({
                path: item,
                stats: await fs.stat(item),
                metadata: await sharp(item).metadata()
            }))
        )
    }

    async createSuperCollections () {

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

                const id = encode(collectionPath)

                const collection = {
                    id: id,
                    path: collectionPath.replace(superCollectionPath, ""),
                    owner: {
                        connect: {
                            id: id
                        }
                    }
                }

                this.collections.push(collection)

                users.forEach(({ posts, path: userPath }) => {

                    const user = {
                        id: encode(userPath),
                        path: userPath.replace(collectionPath, ""),
                        owner: collection
                    }

                    this.users.push(user)

                    posts.forEach(({ media, path: postPath }) => {
                        
                        const post = {
                            id: encode(postPath),
                            path: postPath.replace(userPath, ""),
                            owner: user
                        }

                        this.posts.push(post)

                        media.forEach(({ path: mediaPath, ...rest }) => {
                            
                            const media = {
                                id: encode(mediaPath),
                                path: mediaPath.replace(postPath.split("<").shift(), ""),
                                owner: post,
                                ...rest
                            }
    
                            this.media.push(media)
    
                        })

                        post.picture = this.media[0].id

                    })

                    user.picture = this.posts[0].picture

                })

            })
        })

    }

}