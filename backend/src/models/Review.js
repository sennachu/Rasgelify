const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    boat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Boat',
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    comment: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Review', ReviewSchema);
