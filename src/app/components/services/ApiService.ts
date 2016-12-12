import { Injectable } from '@angular/core';
import { DataService } from '../../services/DataService';

import * as Models from '../../models/index';
import * as System from '../../system/index';

@Injectable()
export class ApiService {

    constructor(private mDataService: DataService,
        private httpClient: System.HttpClient
    ) {

    }

    GetInstruments(): Promise<Models.Instrument[]> {
        let self = this;
        return new Promise(function (resolve, reject) {
            var command = { Name: "ACE-DoGetInstruments" };
            self.httpClient.Post("http://localhost:14029/api/commands", command, response => {
                resolve(response.Instruments);
            });
        });

    }
}