import { ModuleWithProviders }              from '@angular/core';
import { Routes, RouterModule }             from '@angular/router';

import {InstrumentListComponent}            from './instruments-list.component';
import {InstrumentDetailComponent}          from './instrument-detail.component';

export const instrumentRoutes: Routes = [
    {
        path: '', component: InstrumentListComponent
    },
    { path: 'instrument/:id', component:InstrumentDetailComponent }
];

export const instrumentRouting = RouterModule.forChild(instrumentRoutes);