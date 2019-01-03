const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5678

app.use(express.json())
app.use(morgan('dev'))

app.use('/forwarder', require('./routes/forwarders'))
app.use('/comment', require('./routes/comments'))
app.use('/transport', require('./routes/transport'))

mongoose.connect('mongodb://localhost:27017/1stfullstack', {useNewUrlParser: true}, () => {
    console.log('Booted up!')
})

app.use((err, req, res, next) => {
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
    console.log('Server is running')
})