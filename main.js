const express = require('express')
const { request } = require('http');
const { response } = require('express');

const app = express()

app.set("view engine", "ejs");

app.use(express.static('./client/'));

app.listen(process.env.PORT || 8080, () => console.log("Running on port 8080"));