const router = require('express').Router()
const assetController = require('../controllers/asset.controller')

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


