const exp = require('express');
const app = exp();
var path = require('path');

app.use('/', (req,res,next)=> {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(80,function(){
    console.log('80포트로 서버 시작');
})