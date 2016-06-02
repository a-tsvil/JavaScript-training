/**
 * Document storage read write API module
 */
(function() {
    'use strict';
    var fs = require('fs');
    var path = require('path');
    var dataStorePath = path.join(__dirname, '..', '/datastore/documents.json');
    var winston = require('winston');
    var logger = new winston.Logger({
        transports: [
            new(winston.transports.Console)({
                level: 'debug',
                colorize: true,
                handleExceptions: true,
                humanReadableUnhandledException: true
            })
        ]
    });

    /**
     * readAllDocuments method which is read all data from datastore
     * @return {JSON} all documents in JSON format
     */
    function readAllDocuments() {
        return JSON.parse(fs.readFileSync(dataStorePath, 'utf8'));
    }

    /**
     * Extracting documents metadata method. As it be implemented in real service, wirking much faster
     * @return {JSON} Json object representing metadata
     */
    function readDocumentsMetadata() {
        var documentsArr = readAllDocuments().documents, metadata = {}, fragmentsIndex = 0, index = 0;

        while(documentsArr[index] !== undefined) {
            fragmentsIndex = 0;
            metadata[index] = {
                name: documentsArr[index].name,
                id: index,
                fragments: documentsArr[index].fragments.map(extractMetadata)
            };
            index++;
        }

        function extractMetadata(fragment) {
            return {
                name: fragment.name,
                id: fragmentsIndex++
            };
        }

        return metadata;
    }

    /**
     * Query one document by id
     * @param  {number} docId Document ID
     * @return {Object} return document object
     */
    function readDocumentById(docId) {
        return readAllDocuments().documents[docId];
    }

    /**
     * Return selected document fragment
     * @param  {number} docId Documents unique ID
     * @param  {number} fragmentId Documents Fragment unique ID
     * @return {Object} Document Fragment representing object
     */
    function readFragmentById(docId, fragmentId) {
        var document = readAllDocuments().documents[docId];
        if (!document) {
            return null;
        }
        return document.fragments[fragmentId];
    }

    /**
     * Write document to storage
     * @param  {Json} data Document object to write
     * @return {number} last created document id
     */
    function writeDocument(data) {
        var storage = readAllDocuments();
        storage.documents.push(data);
        try {
            fs.writeFileSync(dataStorePath, JSON.stringify(storage), 'utf-8');
        } catch (ioError) {
            throw ioError;
        }
        return storage.documents.length - 1;
    }

    /**
     * Document API module export
     * @type {Object} - document api module
     */
    module.exports = {
        getDocuments: readAllDocuments,
        getDocumentsList: readDocumentsMetadata,
        getDocumentById: readDocumentById,
        getDocumentFragment: readFragmentById,
        saveDocument: writeDocument
    };
}());
