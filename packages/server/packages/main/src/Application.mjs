import express from 'express';
import path from 'path';
import {Main} from "./routes/Main";
let __dirname = path.resolve();
class Application{
	constructor(){
	    let app = express();
        app.set('views', path.join(__dirname, 'src/views'));
        app.use(express.static(path.join(__dirname, 'public')));
        app.set('view engine', 'pug');
        Main(app);
        this.app = app;
	}
}
export default Application;