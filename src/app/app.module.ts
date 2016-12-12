import { NgModule }                         from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import { APP_BASE_HREF,NgClass }            from '@angular/common';
import { FormsModule }                      from '@angular/forms';
import { Routes, RouterModule }             from '@angular/router';
import { JsonpModule, HttpModule }          from '@angular/http';

import { routing, appRoutingProviders }     from './app.routing';

import * as Components                      from './components/index';
import * as Services                        from './services/index';
import * as System                          from './system/index';
import * as Directives                      from './directives/index';


@NgModule({
    imports: [BrowserModule,FormsModule,RouterModule,JsonpModule, HttpModule, routing],
    declarations: [
        Directives.StopPropagation, 
        Components.AppComponent,           Components.InstrumentsComponent,           Components.ChassisComponent,
        Components.SettingsComponent,      Components.HelpComponent,                  Components.InstrumentListComponent, 
        Components.InstrumentDetailComponent,
        Components.TestComponent],

    providers:[ appRoutingProviders,
        Services.ApiService,
        System.CommandRepository,           System.DefaultLoggerFactory,            System.LoggingExceptionHandler,
        System.HttpClient ],

    bootstrap: [Components.AppComponent]
})
export class AppModule { 
    constructor(){
        
    }
}