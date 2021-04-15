import { Injectable } from '@angular/core';
// import { HttpClientHeaders } from '../common/http-headers/http-client-headers';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class ArHomeService{

    private mockJson = 'assets/JSON/Mock.json';
    private mockJson1 = 'assets/JSON/Mock1.json';
    private mockJson2 = 'assets/JSON/Mock2.json';
    private mockJson3 = 'assets/JSON/Mock3.json';
    
    private headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });


    /**
     *
     */
    constructor(private http:HttpClient) {
    }
    // public getData(dataState?: anydataState?: any): Observable<any[]> {
    //     return this.http.get(this.buildUrl(dataState)).pipe(map((response) => response["value"]));
    // }
    public buildUrl(dataState) {
        let qS = "";
        if (dataState) {
            qS += `${dataState.key}?`;

            if (!dataState.rootLevel) {
                if (typeof dataState.parentID === "string") {
                    qS += `$filter=${dataState.parentKey} eq '${dataState.parentID}'`;
                } else {
                    qS += `$filter=${dataState.parentKey} eq ${dataState.parentID}`;
                }
            }
        }
        return `${this.mockJson}${qS}`;
    }
    getData(dataState?: any): Promise<any> {
        return this.http.get(this.mockJson).toPromise();
      }
    getMockData(): Promise<any> {
        return this.http.get(this.mockJson).toPromise();
      }

}