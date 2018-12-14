import {Injectable} from "@angular/core";
import {Headers, RequestOptions, Http} from "@angular/http";
import {Router} from "@angular/router";
import {Subject} from "rxjs";
@Injectable()
export class LoginService {
    constructor(private http: Http, private route: Router) {}
    get user(){
        return this.http.get("/user").map(response => {
            return JSON.parse(response["_body"]).user;
        });
    }
    get loggedIn(){
        return this.user.map(user=>{
            return user != null;
        })
    }
}