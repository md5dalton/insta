import path from "path"
import Post from "./Post.js"
import { chunk, group } from "./utils.js"

export default class User
{

    path
    posts = []
    
    #files = []

    constructor (path, files) {
        this.path = path
        this.#files = files
    }

    isFile (path) {
        return !path.replace(this.path + "/", "").includes("/")
    }

    async createPosts () {

        const dirnames = group(this.#files, ({ path: pathname }) => path.dirname(pathname))

        dirnames.forEach(({ directory, items }) => {
            
            const groups = chunk(items, 10)

            groups.forEach((group, index) => {

                const post = new Post(`${directory}<${index}`, group)

                post.createMedia()

                this.posts.push(post)

            })

        })

    }
}