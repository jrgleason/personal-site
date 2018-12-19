import express from 'express';

const HANDLE_GET = function(req, res){
    res.render('index', { title: 'Express' });
}

const Main = function(e){
    let router = express.Router();
    router.get('/', HANDLE_GET);
    e.use('/', router);
}

export { Main }