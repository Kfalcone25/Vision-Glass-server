const mongoose = require('mongoose');
const { Schema, model } = mongoose;
 
const contactSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        default: "000-000-0000"
    },
    service: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: false
    },
    
},
{
    timestamps: true,
    timeseries: true
});
 
module.exports = model('Contact', contactSchema);