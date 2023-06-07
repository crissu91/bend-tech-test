const {selectBookshops, selectBookshopById} = require('../models/bookshops.model')
exports.getBookshops = (req, res, next) => {
    selectBookshops()
    .then((bookshops) => {
        res.status(200).send({bookshops})
    })
}

exports.getBookshopById = (req, res, next) => {
    const {id} = req.params
    selectBookshopById(id)
    .then((bookshop) => {
        res.status(200).send({bookshop})
    })
    .catch(next)
}