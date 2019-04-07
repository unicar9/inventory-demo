const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
    googleId: String
})

mongoose.model('User', UserSchema)