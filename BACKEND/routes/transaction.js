const router = require('express').Router();
const Transaction = require('../models/transaction.js');
const Product = require('../models/product.js');

router.route('/add').post(async (req, res) => {
    try {
        await Product.findOne({ productName: req.body.productName }, async (err, product) => {
            if (err) throw err;
            if (product) {
                const { productName, qty, type, price, date } = req.body;
                if (req.body.type == 'Sale') {
                    if (product.qty >= qty) {
                        var newTransation = new Transaction({
                            productName,
                            qty,
                            type,
                            price,
                            date
                        });

                        await newTransation.save().then(async (transaction) => {
                            var updatedProduct = {
                                productName: product.productName,
                                qty: Number(product.qty) - Number(qty),
                                purchasePrice: product.purchasePrice,
                                sellingPrice: product.sellingPrice,
                                date: product.date
                            }
                            await Product.findByIdAndUpdate(product._id, updatedProduct);
                            res.json({ state: true, message: "Transaction succesfully added.", data: transaction });
                        }).catch((err) => {
                            res.json({ state: false, message: "Something's wrong with adding Transaction! Try again later.", err: err });
                        });
                    } else {
                        res.json({ state: false, message: "Not enough quantity available for this transaction" });
                    }
                } else {
                    var newTransation = new Transaction({
                        productName,
                        qty,
                        type,
                        price,
                        date
                    });
                    await newTransation.save().then(async(transaction) => {
                        var updatedProduct = {
                            productName: product.productName,
                            qty: Number(product.qty) + Number(qty),
                            purchasePrice: product.purchasePrice,
                            sellingPrice: product.sellingPrice,
                            date: product.date
                        }
                        await Product.findByIdAndUpdate(product._id, updatedProduct);
                        res.json({ state: true, message: "Transaction succesfully added.", data: transaction });
                    }).catch((err) => {
                        res.json({ state: false, message: "Something's wrong with adding Transaction! Try again later.", err: err });
                    });
                }
            }
            else
                res.json({ state: false, message: "Add relevent product before do the transaction." });
        });
    } catch {
        res.status(500).send();
    }
})

router.route('/').get(async (req, res) => {
    try {
        await Transaction.find().then((transactions) => {
            if (!transactions) {
                res.json({ state: false, message: "No available transactions in database." });
            } else {
                res.json({ state: true, data: transactions });
            }
        }).catch((err) => {
            res.json({ state: false, err: err })
        });
    } catch {
        res.status(500).send();
    }
})

router.route('/:name').get(async (req, res) => {
    try {
        await Transaction.find({productName:req.params.name}).then((transactions) => {
            if (!transactions) {
                res.json({ state: false, message: "No available transactions in database." });
            } else {
                res.json({ state: true, data: transactions });
            }
        }).catch((err) => {
            res.json({ state: false, err: err })
        });
    } catch {
        res.status(500).send();
    }
})

router.route('/summary/:type').get(async (req, res) => {
    try {
        await Transaction.find({type:req.params.type}).then((transactions) => {
            if (!transactions) {
                res.json({ state: false, data:0 });
            } else {
                var value=0;
                transactions.map((transaction)=>{
                    value+=Number(transaction.price)*Number(transaction.qty);
                })
                res.json({ state: true, data: value });
            }
        }).catch((err) => {
            res.json({ state: false, err: err })
        });
    } catch {
        res.status(500).send();
    }
})

module.exports = router;