const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    profilePic: {
        type: String,
        default: ''
    },
    role: {
        type: String,
        default: 'user'
    },
    accounts: {
        type: Map,
        of: {
            fees: Number,
            paidStatus: Boolean
        }
    }
}, {timestamps: true})

module.exports = mongoose.model("User", userSchema)