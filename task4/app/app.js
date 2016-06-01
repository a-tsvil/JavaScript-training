var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    winston = require('winston'),
    logger = new winston.Logger({
        transports: [
            new(winston.transports.Console)({
                level: 'debug',
                colorize: true,
                handleExceptions: true,
                humanReadableUnhandledException: true
            })
        ]
    });

app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/docs.svc', function(req, res) {
    res.sendFile(__dirname + '/docs.svc.wadl.xml');
    logger.info('Service acessed at root path, sending WADL.');
});

app.get('/docs.svc/getDocuments', function(req, res) {
    logger.info('getDocuments called');
    res.sendFile(__dirname + '/docs.svc.wadl.xml');
});

app.listen(3000, function() {
    logger.info('Document service app started at port: 3000');
});
