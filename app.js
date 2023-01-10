require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()
const router = require('./routes/router')
const mongoose = require('mongoose')
mongoose.set("strictQuery", false);

app.use(express.json())
app.use(router)



const port = process.env.PORT || 3000

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB)
        app.listen(port, console.log(`server running on port: ${port}`))
    } catch (error) {
        console.log(error)
    }
}
start()



