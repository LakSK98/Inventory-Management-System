const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');

router.route('/signup').post(async (req, res) => {
    try {
        await User.findOne({ email: req.body.email }, async (err, user) => {
            if (err) throw err;
            if (!user) {
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(req.body.password, salt);
                const { name, email, password, contactNo, address, bio } = req.body;
                var newUser = new User({
                    name,
                    email,
                    password,
                    contactNo,
                    address,
                    bio
                });
                newUser.password = hashedPassword;
                await newUser.save().then((user) => {
                    res.json({ state: true, message: "Registration succesfully completed.", data: user });
                }).catch((err) => {
                    res.json({ state: false, message: "Something's wrong with your registration! Try again later.", err: err });
                });
            }
            else
                res.json({ state: false, message: "E-mail is already registered! Please try again with another E-mail." })
        });

    } catch {
        res.status(500).send();
    }
})

router.route('/update/:id').put(async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const { name, email, password, contactNo, address, bio } = req.body;
        var updateUser = {
            name,
            email,
            password,
            contactNo,
            address,
            bio
        };
        updateUser.password = hashedPassword;
        await User.findByIdAndUpdate(req.params.id,updateUser).then(async () => {
            await User.findById(req.params.id).then((updated)=>{
            res.json({state:true,message:"Details successfully updated.",data:updated});
            });
        }).catch((err)=>{
            res.json({state:false,message:"Details update failed. Try again later."});
        });
    } catch {
        res.status(500).send();
    }
})

router.route('/login').post(async (req, res) => {
    try {
        await User.findOne({ email: req.body.email }, async (err, user) => {
            if (err) throw err;
            if (!user) {
                res.json({ state: false, message: "Check your E-mail and Try Again." });
            } else {
                await bcrypt.compare(req.body.password, user.password, (err, state) => {
                    if (state)
                        res.json({ state: true, data: user });
                    else
                        res.json({ state: false, message: "Incorrect Password !" });
                });
            }
        });
    } catch {
        res.status(500).send();
    }
})

module.exports = router;