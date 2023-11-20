import { PrismaClient } from "@prisma/client"
import Filemanager from "./Filemanager.js"

export default class DBManager
{
    #fm
    #prisma

    #models = ["rootCollection", "collection", "user", "post", "media", "reel"]

    #existing = {}

    constructor (path, ext) {

        this.#fm = new Filemanager(path, ext)
        this.#prisma = new PrismaClient()

    }

    async create () {

        console.log("started")
        await this.#fm.createSuperCollections()

        console.log("creating models")
        this.#fm.createModels()

        console.log("Database ops")
        this.init()
            .then(async () => await this.#prisma.$disconnect())
            .catch(async e => {
                console.log(e)
                await this.#prisma.$disconnect()
                process.exit(1)
            })
    }

    async getExisting () {

        const existing = {}

        for (const model of this.#models) existing[model] = await this.#prisma[model].findMany({
            select: {
                id: true
            }
        })

        for (const model in existing) this.#existing[model] = existing[model].map(item => item.id)
        

    }

    filterModels (model) {

        return this.#fm[model + "s"].filter(({ id }) => !this.#existing[model].includes(id))

    }

    async init () {

        await this.getExisting()

        for (const model of this.#models) await this.#prisma[model].createMany({
            data: this.filterModels(model)
        })

    }
}