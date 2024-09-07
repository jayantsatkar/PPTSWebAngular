import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class ConfigService{
    private configData: any;

    constructor (private http: HttpClient){}

    loadConfig(): Promise<void>{
        return this.http.get('assets/appConfig.json')
        .toPromise()
        .then((data) => {
            this.configData = data;
            console.log(this.configData);
        })
        .catch((error) => {
            console.error('Could not load Config.Json',error)
        });
    }

    getConfig(){
        return this.configData;
    }
}