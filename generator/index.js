import DBManager from "./DBManager.js"

const manager = new DBManager("a:/media/images", ["jpg", "jpeg", "png", "webp"])

manager.create()