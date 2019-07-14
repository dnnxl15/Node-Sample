var express = require('express');
var app = express();

app.get('/', (req, res) => {
    //const { fileid } = req.params;
    return res.sendFile('hola.jpg', {root: 'upload'}); 
    });

//app.use(express.static('upload'));
app.listen(3500, function () {
    console.log('Express server is listening, use this url - localhost:3500/default.png');
});