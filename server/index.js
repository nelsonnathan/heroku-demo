const express = require('express')
const path = require('path')
const port = process.env.PORT || 5050

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.listen(port, () => console.log(`App listening on ${port}`))