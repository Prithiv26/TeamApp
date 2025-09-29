const mongoose = require('mongoose')

const matchSchema = new mongoose.Schema({
    opponent: {
        type: String,
        required: true,
        trim: true
    },
    matchTime: {
        type: Date,
        required: true
    },
    matchOffset: {
        type: Date,
    },
    fees: {
        type: Map,
        of: Number,
        required: true
    },
    squad: {
        type: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
        required: true
    },
    state: {
        type: String,
        enum: ['pending', 'confirmed'],
        required: true
    },
    status: {
        type: String,
        enum: ['Upcoming', 'Past', 'Canceled'],
        required: true
    },
    result: {
        type: String,
        enum: ['Won', 'Lost', 'Canceled'],
        required: true
    },
    remarks: String,
    overs: Number
})

module.exports = mongoose.model('Match', matchSchema)