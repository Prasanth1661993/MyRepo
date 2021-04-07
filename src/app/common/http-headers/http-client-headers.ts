import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpClientHeaders{
    /**
     *
     */
    constructor(private http: HttpClient) {
        
    }

    get(url) {
        var headers = new HttpHeaders();
        return this.http.get(url);
    }

    post(url, data) {
        let headers = new HttpHeaders();
        return this.http.post(url, data);
    }

    delete(url) {
        let headers = new HttpHeaders();
        return this.http.delete(url);
    }

    put(url, data) {
        let headers = new HttpHeaders();
        return this.http.put(url, data);
    }
}