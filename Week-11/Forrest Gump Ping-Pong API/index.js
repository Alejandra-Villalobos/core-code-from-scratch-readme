const express = require('express');
const app = express();

app.get('/api/buba-gump/ping', (req, res)=>{
    res.send({
        message:'pong'
    });
});

app.get('/api/buba-gump/pong', (req, res)=>{
    res.send({
        message:'ping'
    });
});

app.listen(3000, () => console.log('Port 3000'));