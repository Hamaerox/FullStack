const express = require('express')
const transportRouter = express.Router() 
const nodemailer = require('nodemailer')


const transport = {
    host: 'smtp.gmail.com',
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((err, succes) => {
    if(err) {
        console.log(err)
    } else {
        console.log('Success')
    }
})

transportRouter.post('/send', (req, res, next) => {
    const name= req.body.name
    const email = req.body.email
    const description = req.body.description
    const content = `name: ${name} \n email: ${email} \n description: ${description}`

    const mail = {
        from: name,
        to: 'timd1026@gmail.com',
        subject: 'Video Game Review Site',
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if(err){
            res.json({
                msg: 'fail'
            })
        } else {
            res.json({
                msg: 'success'
            })
        }
    })
})

module.exports = transportRouter