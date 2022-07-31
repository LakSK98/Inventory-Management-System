const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var transactionSchema = new Schema({
    productName:{type:String,required:true},
    qty:{type:Number,required:true},
    type:{type:String},
    price:{type:Number},
    date:{type:Date,default:Date.now}
});

module.exports = mongoose.model('Transaction',transactionSchema);