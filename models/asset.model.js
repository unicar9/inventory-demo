const mongoose = require('mongoose')
const { Schema } = mongoose

const AssetSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name can not be empty']
    },
    dimension: String,
    location: String,
    status: {
        type: Boolean,
        default: true
    },
    mall: { 
        type: Schema.Types.ObjectId, 
        ref: 'Mall',
        required: [true, 'Associated shopping center can not be empty']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Asset', AssetSchema)