'use strict'

var app = require('./app');
var port = 3001;

app.listen(port, ()=>{
    console.log('---> Listerning at port '+port)
});