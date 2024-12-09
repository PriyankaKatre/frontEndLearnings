const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRouter = require('./api/apiRouter');

const hostname = '127.0.0.1';
const port = 9000;


// configure body-parser
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({extended: false});

app.use(jsonParser);
app.use(urlEncodedParser);

// configure cors
app.use(cors());

//configure the router
app.use('/api', apiRouter);

// Get request

app.get('/',(request, response)=>{
    response.send(`<h2>Welcome to express server of employee portal </h2>`)
})

app.listen(port, hostname, () => {
    console.log(`express is started at http://${hostname}:${port}`);
})
