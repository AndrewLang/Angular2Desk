import {NgModule}       from    '@angular/core';
import {BrowserModule}  from    '@angular/platform-browser';

import {AppComponent}                       from    './components/app.component';
import {InstrumentsComponent}               from './components/instrument/instruments.component';
import {ChassisComponent}                   from './components/chassis/chassis.component';
import {SettingsComponent}                  from './components/setting/settings.component';
import {HelpComponent}                      from './components/help/help.component';
import { routing }                          from    './app.routing'

@NgModule({
    imports: [BrowserModule, routing],
    declarations: [AppComponent,InstrumentsComponent, ChassisComponent,SettingsComponent,HelpComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }