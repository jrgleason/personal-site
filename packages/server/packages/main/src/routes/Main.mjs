import express from 'express';

const HANDLE_GET = function(req, res){
    res.render('index', { title: 'Express' });
}

const Main = function(express){
    router = express.Router();
    /* GET home page. */
    router.get('/', HANDLE_GET);
    express.use('/', router);
}

export {Main}