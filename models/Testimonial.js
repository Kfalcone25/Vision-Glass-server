const mongoose = require('mongoose');
const { Schema, model } = mongoose;
 
const testimonialSchema = new Schema({
    firstName: {
        type: String, 
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }

},
{
    timestamps: true,
    timeseries: true
});
 
module.exports = model('Testimonial', testimonialSchema);