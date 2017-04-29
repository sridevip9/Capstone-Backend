/*global describe:false, it:false, beforeEach:false, afterEach:false*/

'use strict';


var kraken = require('kraken-js'),
    express = require('express'),
    path = require('path'),
    request = require('supertest');

//Get Book 
describe('/books', function() {

    var app, mock;


    beforeEach(function(done) {
        app = express();
        app.on('start', done);
        app.use(kraken({
            basedir: path.resolve(__dirname, '..')
        }));

        mock = app.listen(1337);

    });


    afterEach(function(done) {
        mock.close(done);
    });


    it('should say "hello"', function(done) {
        request(mock)
            .get('/books')
            .expect(200)
            .expect('Content-Type', /html/)

        .expect(/Hello, /)

        .end(function(err, res) {
            done(err);
        });
        // done();
    });

});
//Add Book Form
describe('/books/add', function() {

    var app, mock;


    beforeEach(function(done) {
        app = express();
        app.on('start', done);
        app.use(kraken({
            basedir: path.resolve(__dirname, '..')
        }));

        mock = app.listen(1337);

    });


    afterEach(function(done) {
        mock.close(done);
    });


    it('should say "hello"', function(done) {
        request(mock)
            .get('/books/add')
            .expect(200)
            .expect('Content-Type', /html/)

        .expect(/Hello, /)

        .end(function(err, res) {
            done(err);
        });
        //done();
    });

});

//Edit Book 
describe('/books/edit/58dfcfc9a460e620427c6803', function() {

    var app, mock;


    beforeEach(function(done) {
        app = express();
        app.on('start', done);
        app.use(kraken({
            basedir: path.resolve(__dirname, '..')
        }));

        mock = app.listen(1337);

    });


    afterEach(function(done) {
        mock.close(done);
    });


    it('should say "hello"', function(done) {
        request(mock)
            .get('/books/edit')
            .expect(200)
            .expect('Content-Type', /html/)

        .expect(/Hello, /)

        .end(function(err, res) {
            done(err);

        });
        //done();
    });

});
// Get categories
describe('/categories', function() {

    var app, mock;


    beforeEach(function(done) {
        app = express();
        app.on('start', done);
        app.use(kraken({
            basedir: path.resolve(__dirname, '..')
        }));

        mock = app.listen(1337);

    });


    afterEach(function(done) {
        mock.close(done);
    });


    it('should say "hello"', function(done) {
        request(mock)
            .get('/categories')
            .expect(200)
            .expect('Content-Type', /html/)

        .expect(/Hello, /)

        .end(function(err, res) {
            done(err);
        });
        //done();
    });

});
//Add categories Form
describe('/categories/add', function() {

    var app, mock;


    beforeEach(function(done) {
        app = express();
        app.on('start', done);
        app.use(kraken({
            basedir: path.resolve(__dirname, '..')
        }));

        mock = app.listen(1337);

    });


    afterEach(function(done) {
        mock.close(done);
    });


    it('should say "hello"', function(done) {
        request(mock)
            .get(' ')
            .expect(200)
            .expect('Content-Type', /html/)

        .expect(/Hello, /)

        .end(function(err, res) {
            done(err);
        });
        done();
    });

});

//Edit categories
describe('/categories/edit/58dfcf00a460e620427c67f9', function() {

    var app, mock;


    beforeEach(function(done) {
        app = express();
        app.on('start', done);
        app.use(kraken({
            basedir: path.resolve(__dirname, '..')
        }));

        mock = app.listen(1337);

    });


    afterEach(function(done) {
        mock.close(done);
    });


    it('should say "hello"', function(done) {
        request(mock)
            .get('/categories/edit')
            .expect(200)
            .expect('Content-Type', /html/)

        .expect(/Hello, /)

        .end(function(err, res) {
            done(err);
        });
        //done();
    });

});