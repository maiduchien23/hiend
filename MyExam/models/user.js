const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')


const userSchema = new Schema({
    email: String,
    username: String,
    password: String
}, {


    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
})


const User = mongoose.model('user', userSchema)
module.exports = User