import { Injectable }                   from '@angular/core';
import { Http, Headers }                from '@angular/http';
import 'rxjs/Rx';
import { Observable }                   from 'rxjs/Observable';

import * as ExceptionHandling           from '../exception/index';
import * as Logging                     from '../logging/index';

@Injectable()
export class HttpClient {

    private logger: Logging.ILogger;
    private headers: Headers;

    constructor(
        private http: Http,
        private exceptionHandler: ExceptionHandling.LoggingExceptionHandler,
        loggerFactory: Logging.DefaultLoggerFactory) {

        this.logger = loggerFactory.CreateLogger("HttpClient");

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }


    /** Post sync */
    Post(url: string, data: any, callback: (response: any) => void): void {

        var body = JSON.stringify(data);

        this.logger
            .Debug("Post data:")
            .Debug(data)
            .Debug(body);

        this.http.post(url, body, { headers: this.headers })
            .map(response => {
                callback(response.json());
            })
            .subscribe(
            response => { },
            error => {
                this.logger.Debug("Sent post request and get error:");
                this.exceptionHandler.Handle(error);
            }
            );
    }
    /** Get sync */
    Get(url: string, callback: (data: any) => void): void {
        this.http.get(url).map(response => {
            callback(response);
        })
            .subscribe(
            response => { },
            error => { this.exceptionHandler.Handle(error); }
            );
    }

    /** Get data from given url in async mode */
    GetAsync(url: string): Promise<any> {
        let self = this;
        return new Promise(function (resolve, reject) {
            self.http.get(url)
                .map(response => {
                    self.logger.Debug(" Get response from ")
                        .Debug(response);

                    resolve(response);
                })
                .subscribe(
                response => { },
                error => {
                    self.exceptionHandler.Handle(error);
                    self.logger.Error(error);
                }
                );
        });
    }
}