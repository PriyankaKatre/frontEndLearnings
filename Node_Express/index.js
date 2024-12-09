var express = require("express");
var products = require('./routes/products')
var users = require('./routes/users')
var app = express();

app.use('/products', products)
app.use('/users', users)

app.get("/getUsers" ,(req, res)=> {
    res.send('Hello Priyanka')
});

app.get('/newGetUser',(req, res) => {
    var testObj = {
        testId: 10,
        testName: 'Express learning',
        active: true,
    }
    res.send(testObj);
})

app.listen(4000);
