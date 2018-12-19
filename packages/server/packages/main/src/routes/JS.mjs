import express from 'express';

const HANDLE_GET = function(req, res){
    res.render('js');
}

const JS = function(e){
    let router = express.Router();
    router.get('/', HANDLE_GET);
    e.use('/', router);
}

export { JS }