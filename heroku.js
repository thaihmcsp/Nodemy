const express = require('express');
const path = require('path');
const app = express();

app.use('/static',express.static(path.join(__dirname,'./public')))

app.get('/home',function(req, res){
    var home = path.join(__dirname,'./homepage.html')
    res.sendFile(home)
})

app.listen(process.env.PORT,function(){});



