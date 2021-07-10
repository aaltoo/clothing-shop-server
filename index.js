const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT || 5000

const app = express()

app.listen(() => console.log(`Server is running on port ${PORT}...`))

app.get('/yo', function (req, res) {
    res.send('yo my g')
})
