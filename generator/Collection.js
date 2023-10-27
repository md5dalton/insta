import { group } from "./utils.js"
import User from "./User.js"

export default class Collection
{

    path
    users = []
    
    #files = []

    constructor (path, files) {
        this.path = path
        this.#files = files
    }

    async createUsers () {

        const users = group(this.#files, ({ path: pathname }) => this.path + "/" + pathname.replace(this.path + "/", "").split("/").shift())

        this.users = users.map(({ directory, items }) => {
            
            const user = new User(directory, items)

            user.createPosts()

            return user
            
        })

    }
}