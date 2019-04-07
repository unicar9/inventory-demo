const Asset = require('../models/asset.model')
const Mall = require('../models/mall.model')

exports.create = async (req, res) => {
    const asset = new Asset(req.body)

    try {
        const data = await asset.save()
        res.status(201).send(data)
    } catch (err) {
        res.status(500).json(err.message)
    } 
}

exports.searchAssets = async(req, res) => {
    const { q, cat } = req.body
    const regex = new RegExp( q || '', 'i')
    console.log(`Searching assets by ${cat}, query=${q} .....`)
    try {
        let data
        switch(cat) {
            case "name":
                data = await Asset.find({name: regex})
                                .populate('mall', 'name')
                break
            case "location":
                data = await Asset.find({location: regex})
                                .populate('mall', 'name')
                break
            case "mall":
                const assets = await Asset.find().populate('mall', 'name')

                data = assets.filter(a => {
                    if (a.mall) {
                        return a.mall.name.match(regex)
                    }
                    return false
                })
                break
            default:
                data = []
        }
        res.status(201).send(data)
    } catch (error) {
        res.status(500).send({
            message: 'Internal server error'
        })
    } 
}

exports.findAll = async (req, res) => {
    try {
        const data = await Asset.find().populate('mall')
        res.status(201).send(data)
    } catch (err) {
        res.status(500).json(err.message)
    }
}

exports.findOne = async (req, res) => {

    const { assetId } = req.params

    try {
        const asset = await Asset.findById(assetId).populate('mall')

        if (!asset) {
            return res.status(404).send({
                message: `Asset not found with id ${assetId}`
            })
        }
        res.status(201).send(asset)
    } catch (err) {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: `Asset not found with id ${assetId}`
            })            
        }
        return res.status(500).send({
            message: `Error retrieving Asset with id ${assetId}`
        })
    }

}

exports.update = async (req, res) => {

    const { assetId } = req.params

    try {
        const asset = await Asset.findByIdAndUpdate(assetId, {
            name: req.body.name,
            dimension: req.body.dimension,
            location: req.body.location,
            mall: req.body.mall,
            status: req.body.status || true
        }, {new: true})

        if (!asset) {
            return res.status(404).send({
                message: `Asset not found with id ${assetId}`
            })
        }
        res.status(201).send(asset)

    } catch (err) {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: `Asset not found with id ${assetId}`
            })            
        }
        return res.status(500).send({
            message: `Error retrieving asset with id ${assetId}`
        })
    }
}

exports.delete = async (req, res) => {
    const { assetId } = req.params

    try {
        const asset = await Asset.findByIdAndRemove(assetId)

        if (!asset) {
            return res.status(404).send({
                message: `Asset not found with id ${assetId}`
            })
        }
        res.send({ message: "Asset deleted successfully!", assetId: assetId})
    } catch (err) {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: `Asset not found with id ${assetId}`
            })            
        }
        return res.status(500).send({
            message: `Could not delete asset with id ${assetId}`
        })
    }
}