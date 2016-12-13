import { Injectable } from '@angular/core';

import * as Models from '../models/index';
import * as System from '../system/index';

@Injectable()
export class ApiService {

    constructor(
        private httpClient: System.HttpClient
    ) {

    }

    GetInstruments(): Promise<Models.Instrument[]> {
        let self = this;
        return new Promise(function (resolve, reject) {
            //let url = "http://localhost:14029/api/commands";
            let url = "http://yuxilangtest1/api/commands";
            var command = { Name: "ACE-DoGetInstruments" };
            self.httpClient.Post(url, command, response => {
                resolve(response.Instruments);
            });
        });

    }
}