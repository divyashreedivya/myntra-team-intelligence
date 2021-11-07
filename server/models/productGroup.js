const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductGroupsSchema = new Schema({
    name:{
        type:String
    },
    products:[
        {
            type:Schema.Types.ObjectId,
            ref:'Product'
        }
    ],
    meet_id:{
        type:String,
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model("ProductGroups",ProductGroupsSchema);