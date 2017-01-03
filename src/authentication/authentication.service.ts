import {Injectable} from "@angular/core";
import {Headers, RequestOptions, Http} from "@angular/http";
import {Router} from "@angular/router";
import {Subject} from "rxjs";
@Injectable()
export class LoginService {

    loggedIn: boolean = false;
    private user: any = {};
    private subject: Subject<any> = new Subject();
    constructor(private http: Http, private route: Router) {}
    login(username, password) {
        let payload: String = `username=${username}&password=${password}`;
        let headers = new Headers({ "Content-Type": "application/x-www-form-urlencoded" });
        let options = new RequestOptions({ headers: headers });
        return this.http.post("/login", payload, options ).subscribe(response => {
            let res = JSON.parse(response["_body"]);
            if (res) {
                this.loggedIn = res.auth;
                this.user = res.user;
                this.route.navigateByUrl("/");
            }
            else {
                console.log("Invalid login");
                this.loggedIn = false;
            }
        });
    }
}