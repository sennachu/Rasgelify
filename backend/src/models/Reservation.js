const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
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
    dateFrom: {
        type: Date,
        required: true,
    },
    dateTo: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending',
    },
});

module.exports = mongoose.model('Reservation', ReservationSchema);
