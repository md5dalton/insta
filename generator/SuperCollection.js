import { group } from "./utils.js"
import Collection from "./Collection.js"

export default class SuperCollection
{

    path
    collections = []
    
    #files = []

    constructor (path, files) {
        this.path = path
        this.#files = files
    }

    async createCollections () {

        const collections = group(this.#files, ({ path: pathname }) => this.path + "/" + pathname.replace(this.path + "/", "").split("/").shift())

        this.collections = collections.map(({ directory, items }) => {
            
            const collection = new Collection(directory, items)

            collection.createUsers()

            return collection
            
        })

    }
}