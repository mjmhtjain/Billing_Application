const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const ResponseModel = require('./models/HttpResponseModel');

//Initialize our app variable
const app = express();

//Declaring Port
const port = 3000;

//Middleware for CORS
app.use(cors());

//Middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.json());

app.listen(port, () => {
    console.log('Starting server at' + port);
});

app.get('/', (req, res)=>{
    let response = ResponseModel();
    response.success = true;
    response.message = 'something';
    response.result = {something : 'asdf'};

    res.send(response);
})