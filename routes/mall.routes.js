const router = require('express').Router()
const mallController = require('../controllers/mall.controller')

router.route('/api/malls')
    .get(mallController.findAll)
    .post(mallController.create)

router.route('/api/malls/:mallId')
    .get(mallController.findOne)
    .put(mallController.update)
    .delete(mallController.delete)

module.exports = router