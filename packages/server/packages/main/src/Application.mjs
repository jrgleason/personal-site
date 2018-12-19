import express from 'express';
import path from 'path';
import {Main} from "./routes/Main";

let __dirname = path.resolve();
const PORT = process.env.PORT ? process.env.PORT : "3000";
export class Application{
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
        app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
        this.app = app;
	}
}