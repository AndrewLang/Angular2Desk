/*
*/ 
import { ModuleWithProviders }              from '@angular/core';
import { Routes, RouterModule }             from '@angular/router';

import * as Components                      from './components/index';

import {instrumentRoutes}                   from './components/instrument/instrument.routing';

const rootRoutes: Routes = [
    { path: '', redirectTo: '/instruments', pathMatch: 'full' },
    { path: 'test', component: Components.TestComponent },
    { path: 'home', component: Components.AppComponent },
    {
        path: 'instruments', component: Components.InstrumentsComponent,
        children: [
            { path: '', component: Components.InstrumentListComponent },
        ]
    },
    { path: 'chassis', component: Components.ChassisComponent },
    { path: 'settings', component: Components.SettingsComponent },
    { path: 'help', component: Components.HelpComponent },
];

const appRoutes: Routes = [
    ...rootRoutes,
    ...instrumentRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);