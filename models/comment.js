const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    recommend: {
        type: String,
        // required: true,
        enum: ['Yes', 'No']
    },
    videoGame: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Comment", commentSchema)