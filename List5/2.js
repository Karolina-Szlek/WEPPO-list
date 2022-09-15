
var fs = require('fs');
var https = require('https');

(async function () {
    var pfx = await fs.promises.readFile('test.pfx');
    var server = https.createServer({
        pfx: pfx,
        passphrase: '123'
    },
    (req, res) => {
        res.setHeader('Content-type', 'text/html; charset=utf-8');//stwórz nagłówek z kodowaniem utf8
        res.end(`hello world ${new Date()}`);// i zakończ przez hello wo..
    });
    server.listen(3000);
    console.log('started');
})(); 