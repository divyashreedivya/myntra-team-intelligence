const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    owner:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    products:[{
        type:Schema.Types.ObjectId,
        ref:'Product'
    }]
},{timestamps:true});

module.exports = mongoose.model('Cart',cartSchema);