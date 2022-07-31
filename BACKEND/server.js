const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const url = "mongodb+srv://imsystem:IMS1234@cluster0.v3cxd.mongodb.net/imsystem_db?retryWrites=true&w=majority";

mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

var db = mongoose.connection;
db.once("open", () => {
    console.log("MongoDB connection successfull.");
});

var userRouter = require('./routes/user.js');
app.use('/user', userRouter);

var productRouter = require('./routes/product.js');
app.use('/product', productRouter);

var transactionRouter = require('./routes/transaction.js');
app.use('/transaction', transactionRouter);

app.listen(8080, () => {
    console.log("Server is running on 8080");
})