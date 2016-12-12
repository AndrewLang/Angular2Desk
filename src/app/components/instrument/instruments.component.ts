﻿import {Component, OnInit, OnDestroy}       from '@angular/core';


import {InstrumentListComponent}            from './instruments-list.component';
import {InstrumentDetailComponent}          from './instrument-detail.component';
import {SidebarService}                     from '../services/SidebarService';


@Component({
    templateUrl: 'src/views/instruments/instruments.html',
    providers: [ SidebarService]
})
export class InstrumentsComponent implements OnInit, OnDestroy {
    IsSidebarVisible: boolean;

    constructor(private mSidebarService: SidebarService) {
        this.IsSidebarVisible = mSidebarService.IsSidebarVisible;
        console.log("Constructor of InstrumentsComponent.");
    }

    toggleSidebar() {
        if (this.mSidebarService.IsSidebarVisible)
            this.mSidebarService.HideSidebar();
        else
            this.mSidebarService.ShowSidebar();
        this.IsSidebarVisible = this.mSidebarService.IsSidebarVisible;
    }

    ngOnInit() {
    }
    ngOnDestroy() {

    }

    refresh(){

    }
    addInstrument(){
        
    }
}