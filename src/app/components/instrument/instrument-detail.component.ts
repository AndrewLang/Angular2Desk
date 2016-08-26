import {Component, OnInit, Input}       from '@angular/core';


import {Instrument}                     from '../../models/Instrument';

@Component({
    selector: 'instrument-detail',
    templateUrl: 'src/views/instruments/instrument-detail-view.html',

})
export class InstrumentDetailComponent implements OnInit {

    @Input() Instrument: Instrument;

    constructor() { }

    ngOnInit() { }
        
}