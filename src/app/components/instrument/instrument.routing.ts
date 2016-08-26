import { ModuleWithProviders }              from '@angular/core';
import { Routes, RouterModule }             from '@angular/router';

import {InstrumentListComponent}            from './instruments-list.component';

export const instrumentRoutes: Routes = [
    {
        path: '/', component: InstrumentListComponent
    }
];

export const instrumentRouting = RouterModule.forChild(instrumentRoutes);