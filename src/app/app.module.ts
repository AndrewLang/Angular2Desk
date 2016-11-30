import { NgModule }                         from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import { APP_BASE_HREF,NgClass }            from '@angular/common';
import { FormsModule }                      from '@angular/forms';
import { Routes, RouterModule }             from '@angular/router';
import { JsonpModule, HttpModule }          from '@angular/http';

import {AppComponent}                       from './components/app.component';
import {InstrumentsComponent}               from './components/instrument/instruments.component';
import {InstrumentDetailComponent}          from './components/instrument/instrument-detail.component';
import {InstrumentListComponent}            from './components/instrument/instruments-list.component';
import {ChassisComponent}                   from './components/chassis/chassis.component';
import {SettingsComponent}                  from './components/setting/settings.component';
import {HelpComponent}                      from './components/help/help.component';
import { routing, appRoutingProviders }     from './app.routing';
import {TestComponent}                      from './components/test/test.component';
import {ErrorHandlingService}               from './services/ErrorHandlingService';
import {DataService}                        from './services/DataService';
import {ApiService}                        from './components/services/ApiService';

@NgModule({
    imports: [BrowserModule,FormsModule,RouterModule,JsonpModule, HttpModule, routing],
    declarations: [
        AppComponent,           InstrumentsComponent,           ChassisComponent,
        SettingsComponent,      HelpComponent,                  InstrumentListComponent, 
        InstrumentDetailComponent,
        TestComponent],
    providers:[ appRoutingProviders,DataService, ApiService, ErrorHandlingService ],
    bootstrap: [AppComponent]
})
export class AppModule { 
    constructor(){
        console.log("start app module.");
    }
}