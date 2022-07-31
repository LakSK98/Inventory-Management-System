const router = require('express').Router();
const Product = require('../models/product');

router.route('/add').post(async (req, res) => {
    try {
        await Product.findOne({ productName: req.body.productName }, async (err, product) => {
            if (err) throw err;
            if (!product) {
                const { productName, qty, purchasePrice, sellingPrice, date } = req.body;
                var newProduct = new Product({
                    productName,
                    qty,
                    purchasePrice,
                    sellingPrice,
                    date
                });
                await newProduct.save().then((product) => {
                    res.json({ state: true, message: "Product succesfully added.", data: product });
                }).catch((err) => {
                    res.json({ state: false, message: "Something's wrong with adding Product! Try again later.", err: err });
                });
            }
            else
                res.json({ state: false, message: "Product is already added." })
        });

    } catch {
        res.status(500).send();
    }
})

router.route('/update/:id').put(async (req, res) => {
    try {
        await Product.findById(req.params.id, async (err, product) => {
            if (err) throw err;

            const { productName, qty, purchasePrice, sellingPrice, date } = req.body;
            var newProduct = new Product({
                productName,
                qty,
                purchasePrice,
                sellingPrice,
                date
            });
            newProduct.date = product.date;
            await newProduct.save().then((product) => {
                res.json({ state: true, message: "Product succesfully updated.", data: product });
            }).catch((err) => {
                res.json({ state: false, message: "Something's wrong with updating Product! Try again later.", err: err });
            });
        });

    } catch {
        res.status(500).send();
    }
})

router.route('/delete/:id').delete(async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id, async (err, product) => {
            if (err) throw err;
            res.json({ message: "Product succesfully deleted.", data: product });
        })
    } catch {
        res.status(500).send();
    }
})

router.route('/').get(async (req, res) => {
    try {
        await Product.find().then((products) => {
            if (!products) {
                res.json({ state: false, message: "No available products in database." });
            } else {
                res.json({ state: true, data: products });
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
        await Product.findOne({productName:req.params.name}).then((products) => {
            if (!products) {
                res.json({ state: false, message: "No available products in database." });
            } else {
                res.json({ state: true, data: products });
            }
        }).catch((err) => {
            res.json({ state: false, err: err })
        });
    } catch {
        res.status(500).send();
    }
})

router.route('/inventory/value').get(async (req, res) => {
    try {
        await Product.find().then((products) => {
            if (!products) {
                res.json({ state: false, data:{amt:0,value:0} });
            } else {
                var amount=0,total=0;
                products.map((product)=>{
                    amount+=product.qty;
                    total+=product.qty*product.purchasePrice;
                })
                res.json({ state: true, data: {amt:amount,value:total} });
            }
        }).catch((err) => {
            res.json({ state: false, err: err })
        });
    } catch {
        res.status(500).send();
    }
})

module.exports = router;