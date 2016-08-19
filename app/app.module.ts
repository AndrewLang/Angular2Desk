import {NgModule}       from    '@angular/core';
import {BrowserModule}  from    '@angular/platform-browser';

import {AppComponent}   from    './components/app.component';
import {SidebarService} from    './components/services/SidebarService';

@NgModule({
    imports: [BrowserModule,SidebarService],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }