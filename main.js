const express = require('express')
const { request } = require('http');
const { response } = require('express');

const app = express()

app.set("view engine", "ejs");

app.use(express.static('./client/'));

//serch routing 
//example search url: url/search?q=this+is+a+search
app.get('/search', (request, response) => 
{
    const sQuery = req.query.q; 
});


app.listen(process.env.PORT || 8080, () => console.log("Running on port 8080"));