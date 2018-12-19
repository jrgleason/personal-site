import express from 'express';
import path from 'path';

const HANDLE_GET = function(req, res){
    res.render('index', { title: 'Express' });
};

const Main = function(e){
    let router = express.Router();
    router.get('/', HANDLE_GET);
    e.use('/', router);
};

let __dirname = path.resolve();
const PORT = process.env.PORT ? process.env.PORT : "3000";
class Application{
	constructor(){
	    console.log("Starting the application");
	    let app = express();
        app.set('views', path.join(__dirname, 'views'));
        app.use(express.static(path.join(__dirname, 'public')));
        app.set('view engine', 'pug');
        app.use('/main-ui', express.static(__dirname + '/node_modules/@jrg/main-ui/dist'));
        app.use('/vue', express.static(__dirname + '/node_modules/vue/dist/vue.js'));
        app.use('/vue-router', express.static(__dirname + '/node_modules/vue/dist/vue-router.js'));
        Main(app);
        app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
        this.app = app;
	}
}

let app = new Application();
