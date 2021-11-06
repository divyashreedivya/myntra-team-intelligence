const CartGroup = require('../models/cartGroup');

exports.getCartGroups = async(req,res)=>{
    try{
        const cartgroups = await CartGroup.find({"users":req.users._id});
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
        const cartgroup = await CartGroup.findOne({_id:req.params.cartId});
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
            users:[req.users._id]
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

// exports.addUsersCartGroup = async(req,res)=>{

// }