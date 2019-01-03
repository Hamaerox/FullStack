const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5678
const path = require("path")

app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "client", "build")))

app.use('/forwarder', require('./routes/forwarders'))
app.use('/comment', require('./routes/comments'))
app.use('/transport', require('./routes/transport'))



mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/1stfullstack', {useNewUrlParser: true}, () => {
    console.log('Booted up!')
})



app.use((err, req, res, next) => {
    return res.send({errMsg: err.message})
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})

app.listen(PORT, () => {
    console.log('Server is running')
})