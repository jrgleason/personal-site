import express from 'express';

const HANDLE_GET = function(req, res){
    res.render('java');
}

const Java = function(e){
    let router = express.Router();
    router.get('/', HANDLE_GET);
    e.use('/', router);
}

export { Java }