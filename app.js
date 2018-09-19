const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const ResponseModel = require('./models/HttpResponseModel');
const billHistoryController = require("./controllers/BilllingHistController");

var sampleResponse = {
    success: false,
    message: '',
    result: null
}

// Connect mongoose to our database
const config = require('./database');
mongoose.connect(config.database, {useNewUrlParser : true});

//Initialize our app variable
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

//Middleware for CORS
app.use(cors());

//Middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.json());

//Declaring Port
const port = 3000;

app.listen(port, () => {
    console.log('Starting server at ' + port);
});

app.use('/bill_hist', billHistoryController);