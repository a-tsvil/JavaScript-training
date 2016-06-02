/*
 * RESTful (at least I hope that is) Service for serving some important documents.
 * All required information you can find in README.md
 */
var express = require('express'),
    app = express(),
    documents = require('./api/documents.js'),
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

//Pretty same as @RequestMapping annotation of the Spring framework
app.get('/docs.svc', function(req, res) {
    res.sendFile(__dirname + '/docs.svc.wadl.xml');
    logger.info('Service acessed at root path, sending WADL.');
});

app.get('/docs.svc/getDocuments', function(req, res) {
    logger.info('getDocuments called');
    setTimeout(function() {
        logger.info('All documents data fetched and send to client');
        res.json(documents.getDocuments());
    }, randomDealy());
});

app.get('/docs.svc/getDocumentsList', function(req, res) {
    logger.info('getDocumentsList called');
    res.json(documents.getDocumentsList());
});

app.get('/docs.svc/getDocumentById', function(req, res) {
    logger.info('getDocumentById called');
    var docId = req.query.docId,
        result;
    if (!docId) {
        logger.info('wrong request');
        res.status(400).json({
            error: 'bad request'
        });
    } else {
        result = documents.getDocumentById(docId);
        if (!result) {
            logger.info('non-existing fragment queried');
            res.status(400).json({
                error: 'no such document'
            });
        } else {
            res.json(result);
        }
    }
});

app.get('/docs.svc/getDocumentFragment', function(req, res) {
    logger.info('getDocumentFragment called');
    var docId = req.query.docId,
        result,
        fragmentId = req.query.fragmentId;
    if (!docId || !fragmentId) {
        logger.info('wrong request format');
        res.status(400).json({
            error: 'bad request'
        });
    } else {
        result = documents.getDocumentFragment(docId, fragmentId);
        if (!result) {
            logger.info('non-existing fragment queried');
            res.status(400).json({
                error: 'no such document or fragment'
            });
        } else {
            res.json(result);
        }
    }
});

app.post('/docs.svc/saveDocument', function(req, res) {
    var lastId = -1;
    logger.info('saveDocument called');

    //Chain of checks, try to not let down a service.
    if (!req.body.document) {
        logger.info('wrong request format');
        res.status(400).json({
            error: 'bad request'
        });
        return;
    }
    try {
        JSON.parse(req.body.document);
    } catch (jsonError) {
        logger.info('wrong document write attempt');
        res.status(400).json({
            error: 'bad document format'
        });
        return;
    }
    if (!JSON.parse(req.body.document).fragments) {
        logger.info('wrong document write attempt');
        res.status(400).json({
            error: 'bad document format, fragments must be provided, even if it empty'
        });
        return;
    }
    try {
        lastId = documents.saveDocument(JSON.parse(req.body.document));
    } catch (e) {
        logger.error('I/O related error occured ' + e.message + '\n' + e.stack);
        res.status(500).json({
            error: 'Internal Server Error'
        });
        return;
    }
    res.status(200).json({
        docId: lastId
    });
    logger.info('document successfully writtent to storage.');
});

// Non-existing URI calls handling
app.use(function(req, res, next) {
    res.status(404);
    logger.info('trying to access non-existing resource - ' + req.url);
    // respond with html page
    if (req.accepts('html')) {
        res.sendFile(__dirname + '/error-page.html', {
            url: req.url
        });
        return;
    }

    // respond with json
    if (req.accepts('json')) {
        res.json({
            error: 'Not found'
        });
        return;
    }

    // default to plain-text. send()
    res.type('txt').send('Not found');
});

app.listen(3000, function() {
    logger.info('Document service app started at port: 3000');
});

//Adding some reality
function randomDealy() {
    var dealy = Math.random() * 3000 + 1000;
    logger.info('generating random delay which is now: ' + delay);
    return delay;
}
