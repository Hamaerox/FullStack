const express = require('express')
const commentRouter = express.Router()
const Comment = require('../models/comment')

commentRouter.get('/:gameID', (req, res) => {
    Comment.find({videoGame: req.params.gameID}, (err, data) => {
        if(err) {
            
        }
        return res.status(200).send(data)
    })
})

commentRouter.post('/', (req, res) => {
    const newComment = new Comment(req.body)
    newComment.save((err, comment) => {
        if(err) {

        }
        return res.status(200).send(comment)
    })
})

commentRouter.put('/:id', (req, res) => {
    Comment.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true},
        (err, updatedComment) => {
            if(err) {

            }
            return res.status(200).send(updatedComment)
        }
    )
})

commentRouter.delete('/:id', (req, res) => {
    Comment.findOneAndRemove(
        {_id: req.params.id},
        (err, deletedComment) => {
            if(err){

            }
            return res.status(200).send('That comment was removed')
        }
    )
})

module.exports = commentRouter