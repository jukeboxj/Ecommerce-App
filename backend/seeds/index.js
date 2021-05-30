const mongoose = require("mongoose")
const { seeds } = require("./seedhelper")
const Items = require("../models/items")

mongoose.connect("mongodb://localhost:27017/kirkfall", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => {
    console.log("Database connected")
})

const seedDB = async () => {
    await Items.deleteMany({})
    for (const s of seeds) {
        const i = new Items({
            title: s.title,
            images: s.images,
            category: s.category,
            price: s.price,
        })
        await i.save()
    }
}

seedDB().then(() => {
    mongoose.connection.close()
})
