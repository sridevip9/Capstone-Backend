'use strict';

var mongoose = require('mongoose');

var db = function() {
    return {
        config: function(conf) {
            mongoose.connect('mongodb://localhost/bookstore');
            var db = mongoose.connection;
            db.on('error', console.error.bind(console, 'connection Error'));
            db.once('open', function() {
                console.log('DB connection open ...');
            });
        }
    }
}

module.exports = db();