import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';

import {Instrument}                     from '../../models/Instrument';

@Component({
    selector: 'instrument-detail',
    templateUrl: '/views/InstrumentDetail/',

})
export class InstrumentDetailComponent implements OnInit {

    @Input() Instrument: Instrument;

    constructor() { }

    ngOnInit() { }
        
}