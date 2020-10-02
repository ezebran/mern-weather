const { Schema, model } = require('mongoose');

const citySchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    temperatura: {
        type: Number,
        required: true
    },
    presion: {
        type: Number,
        required: true
    },
    humedad: {
        type: Number,
        required: true
    },
    maxima: {
        type: Number,
        required: true
    },
    minima: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
});

module.exports = model('City', citySchema);