

import { ModuleWithProviders }              from '@angular/core';
import { Routes, RouterModule }             from '@angular/router';

import {AppComponent}                       from './components/app.component';
import {InstrumentsComponent}               from './components/instrument/instruments.component';
import {ChassisComponent}                   from './components/chassis/chassis.component';
import {SettingsComponent}                  from './components/setting/settings.component';
import {HelpComponent}                      from './components/help/help.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/instruments', pathMatch:'full' },
    { path: 'home', component:AppComponent},
    { path: 'instruments', component: InstrumentsComponent },
    { path: 'chassis', component: ChassisComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'help', component: HelpComponent },
    
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);