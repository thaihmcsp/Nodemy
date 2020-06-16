const express = require('express');
const path = require('path');
const app = express();

app.use('/static',express.static(path.join(__dirname,'./public')))

app.get('/home',function(req, res){
    var home = path.join(__dirname,'./homepage.html')
    res.sendFile(home)
})

app.get('/login',function(req, res){
    var login = path.join(__dirname,'./login.html')
    res.sendFile(login)
})

// app.listen(5000)

app.listen(process.env.PORT,function(){});



