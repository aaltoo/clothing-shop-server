const express = require('express')
require('dotenv').config()
const sequelize = require('./db')
const PORT = process.env.PORT || 5000

const app = express()

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(() => console.log(`Server is running on port ${PORT}...`))
    } catch (e) {
        console.log(e)
    }
}

start()

