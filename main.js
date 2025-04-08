const { urlencoded } = require('express');
const express = require('express')
//const { request } = require('http');
//const { response } = require('express');


const app = express()

app.set("view engine", "ejs");

app.use(urlencoded({extended: false}));


app.use(express.static('./client/'));




//serch routing 
//example search url: url/search?q=this+is+a+search
app.get('/search', async function (request, response) 
{
    const sQuery = request.query.q; 
    console.log(sQuery);

    //response.render(index);
    response.send('send back json'); //todo
});


app.listen(process.env.PORT || 8080, () => console.log("Running on port 8080"));