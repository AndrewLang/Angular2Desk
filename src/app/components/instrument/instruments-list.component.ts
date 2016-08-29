import {Component, OnInit, Injectable}          from '@angular/core';
import {ROUTER_DIRECTIVES, Router}              from '@angular/router';
import {NgClass}                                from '@angular/common';

import {DataService}                    from '../../services/DataService';
import {ErrorHandlingService}           from '../../services/ErrorHandlingService';
import {Instrument}                     from '../../models/Instrument';
import {InstrumentDetailComponent}      from './instrument-detail.component';

@Component({
    //selector: 'instrument-list',
    templateUrl: 'src/views/instruments/instrument-list-view.html',
    directives: [ROUTER_DIRECTIVES, NgClass, InstrumentDetailComponent],
    providers: [DataService, ErrorHandlingService]
})
export class InstrumentListComponent implements OnInit {

    Instruments: Instrument[];
    SelectedInstrument: Instrument;

    constructor(private mDataService: DataService, private mRouter: Router) {
        console.log("Constructor of InstrumentListComponent.");
    }


    ngOnInit() {
        // var command = { Name: "ACE-DoGetInstruments" };
        // this.mDataService.Post("http://localhost:14029/api/commands", command, response => {
        //     console.log("api response: " + response);
        //     this.Instruments = response.InstrumentsChanges;
        //     console.log(this.Instruments);

        //     if (this.Instruments) {
        //         this.SelectedInstrument = this.Instruments[0];
        //         this.SelectedInstrument.IsSelected = true;
        //     }
        //     console.log(this.SelectedInstrument);
        // });

        /* Mock data */
        this.Instruments = [];
        for (var i = 1; i <= 5; i++) {
            let data = new Instrument();
            data.Id = i;
            data.Model = "Instrument" + i;
            data.Manufacturer = "Keysight";
            data.FullImageUrl = "./src/assets/images/PROD-2372474-33.jpg";
            if (i == 1) {
                data.IsSelected = true;
                this.SelectedInstrument = data;
            }
            this.Instruments.push(data);
        }
    }

    showDetail(instrument: Instrument): void {
        //this.mRouter.navigate(['InstrumentDetail', { id: instrument.Id }]);
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

}