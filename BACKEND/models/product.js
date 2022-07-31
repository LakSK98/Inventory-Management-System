const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productSchema = new Schema({
    productName:{type:String,required:true},
    qty:{type:Number,default:0},
    purchasePrice:{type:Number,required:true},
    sellingPrice:{type:Number,required:true},
    date:{type:Date,default:Date.now}
});

module.exports = mongoose.model('Product',productSchema);