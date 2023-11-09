const mongoose = require('mongoose');

const getLostSchema = mongoose.Schema({
    name: { type: String },
    age: { type: String },
    contact: { type: String },
    email: { type: String },
    country: { type: String },
    others: { type: String },
    latitude: { type: String },
    longitude: { type: String },
    ip: { type: String },
    sex: { type: String },
    date: {type: String},
    other: {type: String}
});

const GetLost = mongoose.model('GetLost', getLostSchema);
module.exports = { GetLost };