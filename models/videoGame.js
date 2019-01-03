const mongoose = require('mongoose')

const videoGameSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    }
})

mongoose.model('VideoGame', videoGameSchema)