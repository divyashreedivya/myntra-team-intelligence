const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    name:{
        type:String,
        required:'Name is required'
    },
    email : {
        type:String,
        required:'Email is required'
    },
    password:{
        type:String,
        required:'Password is required'
    },
    phoneno:{
        type:String,
        // required:'Phone number is required'
    },
    admin:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
});

UserSchema.pre(
    'save',
    async function(next){
        const user = this;
        const hash = await bcrypt.hash(this.password,10);
        this.password = hash;
        next();
    }
);

UserSchema.methods.isValidPassword = async function(password){
    const user = this;
    const compare = await bcrypt.compare(password,this.password);
    return compare;
}

module.exports = mongoose.model('User',UserSchema);