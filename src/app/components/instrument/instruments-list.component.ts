import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as Models from '../../models/index';
import * as Services from '../../services/index';
import * as System from '../../system/index';

import { DataService } from '../../services/DataService';
import { ErrorHandlingService } from '../../services/ErrorHandlingService';

import { ApiService } from '../services/ApiService';

@Component({
    //selector: 'instrument-list',
    templateUrl: 'src/views/instruments/instrument-list-view.html',
    providers: [DataService, ErrorHandlingService]
})
export class InstrumentListComponent implements OnInit {
    InterfacesDictionary: { [name: string]: Models.Interface } = {};
    InterfacesTranslateMap: { [name: string]: string } = {};
    Interfaces: Models.Interface[] = [];
    Instruments: Models.Instrument[];
    SelectedInstrument: Models.Instrument;
    private logger: System.ILogger;

    constructor(private mDataService: DataService,
        private mApiService: ApiService,
        private mRouter: Router,
        loggerFactory: System.DefaultLoggerFactory
    ) {
        this.logger = loggerFactory.CreateLogger("Instrument List");

        this.InterfacesTranslateMap["IoAgentGpibPci"] = "GPIB";
        this.InterfacesTranslateMap["IoAgentPxi"] = "PXI";
        this.InterfacesTranslateMap["IoAgentTcpip"] = "LAN";
    }


    ngOnInit() {
        this.mApiService.GetInstruments().then(response => {
            this.Instruments = response;
            this.logger.Debug(response)
                .Debug(this.Instruments);

            console.log(response);

            let index: number = 1;
            for (let instrument of this.Instruments) {
                let item = this.InterfacesDictionary[instrument.AgentName];
                if (!item) {
                    item = new Models.Interface();
                    item.Name = instrument.AgentName;
                    item.Header = this.InterfacesTranslateMap[instrument.AgentName] || instrument.AgentName;
                    item.Id = index;
                    this.InterfacesDictionary[instrument.AgentName] = item;
                    this.Interfaces.push(item);
                    index++;
                }
                item.Instruments.push(instrument);
            }
            this.logger.Debug("Interfaces:")
                .Debug(this.InterfacesDictionary);

            if (this.Instruments) {
                this.SelectedInstrument = this.Instruments[0];
                this.SelectedInstrument.IsSelected = true;
            }
            this.logger.Debug(this.SelectedInstrument);
        })
            .catch(error => this.logger.Error(error));

        /* Mock data */
        // this.Instruments = [];
        // for (var i = 1; i <= 5; i++) {
        //     let data = new Instrument();
        //     data.Id = i;
        //     data.Model = "Instrument" + i;
        //     data.Manufacturer = "Keysight";
        //     data.FullImageUrl = "./src/assets/images/PROD-2372474-33.jpg";
        //     if (i == 1) {
        //         data.IsSelected = true;
        //         this.SelectedInstrument = data;
        //     }
        //     this.Instruments.push(data);
        // }
    }

    showDetail(instrument: Models.Instrument): void {
        this.loadInstrument(instrument.Id);
    }
    loadInstrument(id: number) {
        if (id) {
            var command = { Name: "GetInstrument", Parameters: { Id: id } };
            this.mDataService.Post("/api/commands", command, response => {
                this.Instruments.forEach((instrument: Models.Instrument) => { instrument.IsSelected = false; });

                this.SelectedInstrument = response;

                this.Instruments.forEach((instrument: Models.Instrument) => {
                    if (instrument.Id == this.SelectedInstrument.Id)
                        instrument.IsSelected = true;
                });

                this.logger.Debug(this.Instruments);
            });
        }
    }
    selectInstrument(instrument: Models.Instrument) {
        if (this.SelectedInstrument)
            this.SelectedInstrument.IsSelected = false;

        if (instrument)
            instrument.IsSelected = true;
        this.SelectedInstrument = instrument;

    }
    getInstrumentImage(instrument: Models.Instrument): string {
        this.logger.Debug("get instrument icon");
        if (instrument && instrument.FullImageUrl)
            return instrument.FullImageUrl;
        else
            return './src/assets/images/defaultinstrument.png';
    }
    toggleInterface(item: Models.Interface) {
        item.IsCollapse = !item.IsCollapse;
    }
}