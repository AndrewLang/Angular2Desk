import { NgModule }                         from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import { APP_BASE_HREF }                    from '@angular/common';
import { FormsModule }                      from '@angular/forms';
import { Routes, RouterModule }             from '@angular/router';
import {Http, Headers,HTTP_PROVIDERS} from '@angular/http';

import {AppComponent}                       from './components/app.component';
import {InstrumentsComponent}               from './components/instrument/instruments.component';
import {ChassisComponent}                   from './components/chassis/chassis.component';
import {SettingsComponent}                  from './components/setting/settings.component';
import {HelpComponent}                      from './components/help/help.component';
import { routing, appRoutingProviders }     from './app.routing';
import {TestComponent}                      from './components/test/test.component';
import {ErrorHandlingService}               from './services/ErrorHandlingService';
import {DataService}                        from './services/DataService';

import {InstrumentListComponent}               from './components/instrument/instruments-list.component';

@NgModule({
    imports: [BrowserModule,FormsModule,RouterModule, routing],
    declarations: [AppComponent,
    InstrumentsComponent, ChassisComponent,SettingsComponent,HelpComponent,InstrumentListComponent, 
    TestComponent],
    providers:[ appRoutingProviders,DataService, ErrorHandlingService,HTTP_PROVIDERS ],
    bootstrap: [AppComponent]
})
export class AppModule { 
    constructor(){
        console.log("start app module.");
    }
}