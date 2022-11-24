const mongoose = require("mongoose");
const {Schema,model} = require('mongoose');
const {ObjectId} = mongoose.Types;

const productsSchema = new Schema ({
    titulo:{type:String,require:true},
    dueño:{type:ObjectId, require:true, ref: "loginUser"}
},{versionKey: false});



module.exports = model("Product",productsSchema)