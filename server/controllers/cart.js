const CartGroup = require('../models/cartGroup');
const User = require('../models/user');

exports.getCartGroups = async(req,res)=>{
    try{
        const cartgroups = await CartGroup.find({"users":req.user._id});
        if(!cartgroups){
            return res.status(404).json({'msg':'No cart groups'});
        }
        res.json(cartgroups);
    }
    catch(err){
        console.log(err);
    }
}

exports.getCartGroup = async(req,res)=>{
    try{
        const cartgroup = await CartGroup.findOne({_id:req.params.id}).populate("users").populate("products");
        if(!cartgroup){
            return res.status(404).json({'msg':'No cart groups'});
        }
        res.json(cartgroup);
    }
    catch(err){
        console.log(err);
    }
}

exports.createCartGroup = async(req,res)=>{
    try{
        const {name} = req.body;
        const cartgroup = await CartGroup.create({
            name,
            users:[req.user._id]
        });
        if(!cartgroup){
            return res.status(404).json({'msg':'Could not create cart group'});
        }
        res.json(cartgroup);
    }
    catch(err){
        console.log(err);
    }
}

exports.addUserCartGroup = async(req,res)=>{
    try{
        const {email} = req.body;
        
        const user = await User.findOne({email:email});
        if(!user){
            return res.status(404).json({'msg':'User not found'});
        }
        console.log(user);
        const cartgroup  = await CartGroup.findOneAndUpdate({_id:req.params.id},{
            $push:{
                "users":user._id
            }
        },{new:true});
        return res.json(cartgroup);
    }
    catch(err){
        res.status(500).json({'err':err.toString()});
    }
}

exports.addProductCartGroup = async(req,res)=>{
    try{
        const {productId} = req.body;
        const cartgroup = await CartGroup.findOneAndUpdate({_id:req.params.id},{
            $push:{
                products:productId
            }
        },{new:true});
        if(!cartgroup){
            return res.status(400).json({'msg':'Unable to update'});
        }
        res.json(cartgroup);
    }
    catch(err){
        res.status(500).json({'err':err.toString()});
    }
}