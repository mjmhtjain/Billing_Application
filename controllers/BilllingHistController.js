const express = require('express');
const BillHistModel = require('../models/BillHistoryModel');
const ResponseModel = require('../models/HttpResponseModel');

//Initialize our app variable
const app = express();

app.get('/', (req, res)=>{
    res.send("Hello there!!!");
});

//fetch all the bills
app.get('/fetchBills', (req, res) => {
    let callback = (err, product) => {
        // console.log(product);
        let response = ResponseModel();
        response.success = true;
        response.message = 'Success';
        response.result = product;

        res.send(response);
    };

    BillHistModel.queries.fetchBillHistory(callback);
    // query.exec(callback);
});

module.exports = app;