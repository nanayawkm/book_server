//import express,body-parser
const express = require('express')
const bodyParser = require('body-parser')
const Bookmodel = require ("./model")
const {listbookController,updatebookController,createbookController,deleteBookController} = require("./controllers")

//create express server instance
const server = express();

//middlewares
server.use(bodyParser.json());

//Database



//Bank Model




//routes
server.get('/book', listbookController)
server.post('/book', createbookController)
server.put('/book', updatebookController)
server.delete('/book', deleteBookController)




//start server
server.listen(3001,function(){console.log('idey listen boss')})