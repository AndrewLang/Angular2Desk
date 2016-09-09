import {Component, OnInit, Injectable}          from '@angular/core';
import {ROUTER_DIRECTIVES, Router}              from '@angular/router';
import {NgClass}                                from '@angular/common';

import {DataService}                    from '../../services/DataService';
import {ErrorHandlingService}           from '../../services/ErrorHandlingService';
import {Instrument}                     from '../../models/Instrument';
import {Interface}                     from '../../models/Interface';
import {InstrumentDetailComponent}      from './instrument-detail.component';
import {ApiService}     from '../services/ApiService';

@Component({
    //selector: 'instrument-list',
    templateUrl: 'src/views/instruments/instrument-list-view.html',
    directives: [ROUTER_DIRECTIVES, NgClass, InstrumentDetailComponent],
    providers: [DataService, ErrorHandlingService]
})
export class InstrumentListComponent implements OnInit {
    InterfacesDictionary: { [name: string]: Interface } = {};
    Interfaces:Interface[] = [];
    Instruments: Instrument[];
    SelectedInstrument: Instrument;

    constructor(private mDataService: DataService, private mApiService: ApiService, private mRouter: Router) {
        console.log("Constructor of InstrumentListComponent.");
    }


    ngOnInit() {
        this.mApiService.getInstruments(response => {
            console.log(response);
            this.Instruments = response.InstrumentsChanges;

            let index:number = 1;
            for (let instrument of this.Instruments) {
                let item = this.InterfacesDictionary[instrument.AgentName];
                if (!item) {
                    item = new Interface();
                    item.Name = instrument.AgentName;
                    item.Header = instrument.AgentName;
                    item.Id = index;
                    this.InterfacesDictionary[instrument.AgentName]= item;
                    this.Interfaces.push( item );
                    index++;
                }
                item.Instruments.push(instrument);
            }
            console.log("interfaces");
            console.log(this.InterfacesDictionary);

            if (this.Instruments) {
                this.SelectedInstrument = this.Instruments[0];
                this.SelectedInstrument.IsSelected = true;
            }
            console.log(this.SelectedInstrument);
        });

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

    showDetail(instrument: Instrument): void {
        this.loadInstrument(instrument.Id);
    }

    loadInstrument(id: number) {
        if (id) {
            var command = { Name: "GetInstrument", Parameters: { Id: id } };
            this.mDataService.Post("/api/commands", command, response => {
                this.Instruments.forEach((instrument: Instrument) => { instrument.IsSelected = false; });

                this.SelectedInstrument = response;

                this.Instruments.forEach((instrument: Instrument) => {
                    if (instrument.Id == this.SelectedInstrument.Id)
                        instrument.IsSelected = true;
                });

                console.log(this.Instruments);
            });
        }
    }

    selectInstrument(instrument: Instrument) {
        if (this.SelectedInstrument)
            this.SelectedInstrument.IsSelected = false;

        if (instrument)
            instrument.IsSelected = true;
        this.SelectedInstrument = instrument;

    }
    getInstrumentImage(instrument: Instrument): string {
        console.log("get instrument icon");
        if (instrument && instrument.FullImageUrl)
            return instrument.FullImageUrl;
        else
            return './src/assets/images/defaultinstrument.png';
    }
    toggleInterface( item: Interface){
        item.IsCollapse = !item.IsCollapse;
    }
}