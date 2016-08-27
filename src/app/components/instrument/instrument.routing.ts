import { ModuleWithProviders }              from '@angular/core';
import { Routes, RouterModule }             from '@angular/router';

import {InstrumentListComponent}            from './instruments-list.component';
import {InstrumentDetailComponent}          from './instrument-detail.component';
import {InstrumentsComponent}               from './instruments.component';

export const instrumentRoutes: Routes = [
    // {
    //     path: 'instruments', component: InstrumentsComponent,
    //     children:[
    //         {path:'', component:InstrumentListComponent}
    //     ]
    // },
    // { path: 'instrument/:id', component:InstrumentDetailComponent }
];

export const instrumentRouting = RouterModule.forChild(instrumentRoutes);