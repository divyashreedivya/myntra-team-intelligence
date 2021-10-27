const ProductGroup = require('../models/productGroup');

exports.getGroups = async(req,res)=>{
    try{
        const groups = await ProductGroup.find({});
        if(!groups){
            return res.status(404).json({'msg':'No Groups'});
        }
        res.json(groups);
    }
    catch(err){
        res.status(500).json({'err':err.toString()});
    }
}

exports.getGroup = async(req,res)=>{
    try{
        const group = await ProductGroup.findOne({_id:req.params.id});
        if(!group){
            return res.status(404).json({'msg':'Group not found'});
        }
        res.json(group);
    }
    catch(err){
        res.status(500).json({'err':err.toString()});
    }
}

exports.createGroup = async(req,res)=>{
    try{
        const group = await ProductGroup.create(req.body);
        if(!group){
            return res.status(400).json({'msg':err.toString()});
        }
        res.json(group);
    }
    catch(err){
        res.status(500).json({'err':err.toString()});
    }
}

exports.addProducts = async(req,res)=>{
    try{
        const group = await ProductGroup.exists({_id:req.params.id});
        if(!group){
            return res.status(404).json({'msg':'Group not found'});
        }
        const addp = await ProductGroup.findOneAndUpdate({_id:req.params.id},{
            $push:{"products":req.body.products}
        },{new:true})
        res.json(addp);
    }
    catch(err){
        res.status(500).json({'err':err.toString()});
    }
}

exports.removeProduct = async(req,res)=>{
    try{
        const group = await ProductGroup.exists({_id:req.params.id});
        if(!group){
            return res.status(404).json({'msg':'Group not found'});
        }
        const remp = await ProductGroup.findOneAndUpdate({_id:req.params.id},{
            $pull : {"products":req.body.p_id}
        },{new:true});
        res.json(remp);
    }
    catch(err){
        res.status(500).json({'err':err.toString()});
    }
}

exports.deleteGroup = async(req,res)=>{
    try{
        const group = await ProductGroup.findOneAndRemove({_id:req.params.id});
        if(!group){
            return res.status(404).json({'msg':'Group not found'});
        }
        res.json(group);
    }
    catch(err){
        res.status(500).json({'err':err.toString()});
    }
}