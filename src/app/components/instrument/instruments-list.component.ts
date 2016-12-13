import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as Models from '../../models/index';
import * as Services from '../../services/index';
import * as System from '../../system/index';



@Component({
    //selector: 'instrument-list',
    templateUrl: 'src/views/instruments/instrument-list-view.html'
})
export class InstrumentListComponent implements OnInit {
    InterfacesDictionary = new System.Dictionary<Models.Interface>();
    InterfacesTranslateMap: { [name: string]: string } = {};
    Interfaces: Models.Interface[] = [];
    Instruments: Models.Instrument[];
    SelectedInstrument: Models.Instrument;
    private logger: System.ILogger;

    constructor(
        private mApiService: Services.ApiService,
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
            // this.logger.Debug(response)
            //     .Debug(this.Instruments);

            //onsole.log(response);

            let index: number = 1;
            for (let instrument of this.Instruments) {
                let item = this.InterfacesDictionary.Item(instrument.AgentName);
                if (!item) {
                    item = new Models.Interface();
                    item.Name = instrument.AgentName;
                    item.Header = this.InterfacesTranslateMap[instrument.AgentName] || instrument.AgentName;
                    item.Id = index;
                    this.InterfacesDictionary.Add(instrument.AgentName, item);
                    this.Interfaces.push(item);
                    index++;
                }
                item.Instruments.push(instrument);

                this.logger.Debug(`Instrument '${instrument.Model}'`);
                for (let dataPackage of instrument.Packages) {
                    this.logger.Debug(dataPackage);
                }
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

    selectInstrument(instrument: Models.Instrument) {
        if (this.SelectedInstrument)
            this.SelectedInstrument.IsSelected = false;

        if (instrument)
            instrument.IsSelected = true;
        this.SelectedInstrument = instrument;

    }
    getInstrumentImage(instrument: Models.Instrument): string {
        if (instrument && instrument.FullImageUrl)
            return instrument.FullImageUrl;
        else
            return './src/assets/images/DefaultInstrument.png';
    }
    toggleInterface(item: Models.Interface): void {
        item.IsCollapse = !item.IsCollapse;
    }

    CollapseAllInterfaces(): void {
        for (let item of this.InterfacesDictionary.Values()) {
            item.IsCollapse = true;
            this.logger.Debug(`Collapse ${item.Header}`);
        }
    }
    ExpandAllInterfaces(): void {
        for (let item of this.InterfacesDictionary.Values()) {
            item.IsCollapse = false;
            this.logger.Debug(`Expand ${item.Header}`);
        }
    }
}