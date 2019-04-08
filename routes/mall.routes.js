const router = require('express').Router()
const mallController = require('../controllers/mall.controller')
const requireLogin = require('../middlewares/requireLogin')

router.use('/api/malls', requireLogin)

router.route('/api/malls')
    .get(mallController.findAll)
    .post(mallController.create)

router.route('/api/malls/:mallId')
    .get(mallController.findOne)
    .put(mallController.update)
    .delete(mallController.delete)

module.exports = router