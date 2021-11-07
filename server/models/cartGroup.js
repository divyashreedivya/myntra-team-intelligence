const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartGroupSchema = new Schema({
    name:{
        type:String
    },
    products:[
        {
            type:Schema.Types.ObjectId,
            ref:'Product'
        }
    ],
    users:[{
        type:Schema.Types.ObjectId,
        ref:'User'
    }]
},{timestamps:true});

module.exports = mongoose.model("CartGroup",CartGroupSchema);