require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()
const router = require('./routes/router')
const mongoose = require('mongoose')
mongoose.set("strictQuery", false);
const helmet = require('helmet')
const cors =  require('cors')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')

const limiter = rateLimiter({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100
})
app.use(helmet())
app.use(cors())
app.use(xss())
app.use(limiter)
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



