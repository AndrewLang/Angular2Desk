import {Component, OnInit, Injectable}    from '@angular/core';
import {ROUTER_DIRECTIVES,Router}              from '@angular/router';

import {DataService}                    from '../../services/DataService';
import {ErrorHandlingService}           from '../../services/ErrorHandlingService';
import {Instrument}                     from '../../models/Instrument';
import {InstrumentDetailComponent}      from './instrument-detail.component';

@Component({
    //selector: 'instrument-list',
    templateUrl: 'src/views/instruments/instrument-list-view.html',
    directives: [ROUTER_DIRECTIVES, InstrumentDetailComponent],
    providers: [DataService, ErrorHandlingService]
})

@Injectable()
export class InstrumentListComponent implements OnInit {
    
    Instruments: Instrument[];
    SelectedInstrument: Instrument;

    constructor(private mDataService: DataService,
        private mRouter: Router) { 
            console.log( "Constructor of InstrumentListComponent.");
        }


    ngOnInit() {
        var command = { Name: "GetInstruments", Parameters: {} };
        this.mDataService.Post("/api/commands", command, response=> {
             console.log( response );
            this.Instruments = response;
            console.log( this.Instruments);
            
            if (this.Instruments.length) {
               this.SelectedInstrument = this.Instruments[0];
                this.SelectedInstrument.IsSelected = true;
            }
            console.log(this.SelectedInstrument);
        });
    }

    showDetail(instrument: Instrument): void {
        //this.mRouter.navigate(['InstrumentDetail', { id: instrument.Id }]);
        this.loadInstrument(instrument.Id);
    }

    loadInstrument(id: number) {
        if (id) {
            var command = { Name: "GetInstrument", Parameters: { Id: id } };
            this.mDataService.Post("/api/commands", command, response=> {
                this.Instruments.forEach((instrument:Instrument)=> { instrument.IsSelected = false; });

                this.SelectedInstrument = response;

                this.Instruments.forEach((instrument:Instrument)=> {
                    if (instrument.Id == this.SelectedInstrument.Id)
                        instrument.IsSelected = true;
                });

                console.log(this.Instruments);
            });
        }
    }

    IsEven(index:number): boolean {
        
        return index %2==0;
    }

}