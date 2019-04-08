const router = require('express').Router()
const assetController = require('../controllers/asset.controller')
const requireLogin = require('../middlewares/requireLogin')

if (!process.env.NODE_ENV === 'test') {
    router.use('/api/assets', requireLogin)
}

router.route('/api/assets')
    .get(assetController.findAll)
    .post(assetController.create)

router.route('/api/assets/search')
    .post(assetController.searchAssets)

router.route('/api/assets/:assetId')
    .get(assetController.findOne)
    .put(assetController.update)
    .delete(assetController.delete)

module.exports = router


