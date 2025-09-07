const router = require('express').Router()
const {Connect} = require('../db/model')
module.exports = router

router.post('/', (req, res, next) => {
    Connect.create({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message

    })
    .then(connect => {
        return res.status(200).json(connect)
    })
    .catch(next)
})