const mongoose = require('mongoose');
const { Schema, model } = mongoose;
 
const userSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    review: {
        type: String,
        required: true
    },
    rating: {}
},
{
    timestamps: true,
    timeseries: true
});
 
module.exports = model('User', userSchema);