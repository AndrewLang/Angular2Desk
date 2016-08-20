import { NgModule }                         from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import { APP_BASE_HREF }                    from '@angular/common';
import { FormsModule }                      from '@angular/forms';
import { Routes, RouterModule }             from '@angular/router';

import {AppComponent}                       from './components/app.component';
import {InstrumentsComponent}               from './components/instrument/instruments.component';
import {ChassisComponent}                   from './components/chassis/chassis.component';
import {SettingsComponent}                  from './components/setting/settings.component';
import {HelpComponent}                      from './components/help/help.component';
import { routing, appRoutingProviders }     from './app.routing'



@NgModule({
    imports: [BrowserModule,FormsModule,RouterModule, routing],
    declarations: [AppComponent,InstrumentsComponent, ChassisComponent,SettingsComponent,HelpComponent],
    providers:[ appRoutingProviders,{ provide: APP_BASE_HREF, useValue: '/' }],
    bootstrap: [AppComponent]
})
export class AppModule { }