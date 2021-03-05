'use strict'

const express = require('express');
const app = express();
const products = require('./routes/products');
const client = 'http://localhost:3000';

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', `${client}`);
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Allow', 'GET, POST');
    next();
});

app.use('/', products);

module.exports = app;