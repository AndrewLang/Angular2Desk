import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';

import {ErrorHandlingService} from './ErrorHandlingService'

@Injectable()
export class DataService {

    errorHandlingService: ErrorHandlingService;
    http: Http;
    headers: Headers;

    constructor(http: Http, errorHandlingService: ErrorHandlingService) {

        this.http = http;
        this.errorHandlingService = errorHandlingService;

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');

    }

    // Post
    Post(url: string, data: any, callback: (response: any) => void): void {

        var body = JSON.stringify(data);

        this.http.post(url, body, { headers: this.headers })
            .map(response=> {
                callback(response.json());
            })
            .subscribe(
            response=> { },
            error=> { this.errorHandlingService.HandleError(error); }
            );
    }

}