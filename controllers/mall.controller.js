const Mall = require('../models/mall.model')
const Asset = require('../models/asset.model')

exports.create = async (req, res) => {
    const mall = new Mall(req.body)

    try {
        const data = await mall.save()
        res.status(201).send(data)
    } catch (err) {
        res.status(500).json(err.message)
    } 
}

exports.findAll = async (req, res) => {
    try {
        const data = await Mall.find()
        res.status(201).send(data)
    } catch (err) {
        res.status(500).json(err.message)
    }
}

exports.findOne = async (req, res) => {

    const { mallId } = req.params

    try {
        const mall = await Mall.findById(mallId)
        const assets = await Asset.find({ mall: mallId}).populate('mall', 'name')
        
        const data = {
            ...mall._doc,
            assets: assets
        }
        if (!mall) {
            return res.status(404).send({
                message: `Shopping center not found with id ${mallId}`
            })
        }
        res.status(201).send(data)
    } catch (err) {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: `Shopping center not found with id ${mallId}`
            })            
        }
        return res.status(500).send({
            message: `Error retrieving shopping center with id ${mallId}`
        })
    }

}

exports.update = async (req, res) => {

    const { mallId } = req.params

    try {
        const mall = await Mall.findByIdAndUpdate(mallId, {
            name: req.body.name,
            address: req.body.address
        }, {new: true})

        if (!mall) {
            return res.status(404).send({
                message: `Shopping center not found with id ${mallId}`
            })
        }
        res.status(201).send(mall)

    } catch (err) {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: `Shopping center not found with id ${mallId}`
            })            
        }
        return res.status(500).send({
            message: `Error retrieving shopping center with id ${mallId}`
        })
    }

}

exports.delete = async (req, res) => {

    const { mallId } = req.params

    try {
        const mall = await Mall.findByIdAndRemove(mallId)

        if (!mall) {
            return res.status(404).send({
                message: `Shopping center not found with id ${mallId}`
            })
        }
        res.send({ message: "Shopping center deleted successfully!", mallId: mallId })
    } catch (err) {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: `Shopping center not found with id ${mallId}`
            })            
        }
        return res.status(500).send({
            message: `Could not delete shopping center with id ${mallId}`
        })
    }
}