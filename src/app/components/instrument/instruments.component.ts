

import {Component}                from '@angular/core';
import { RouterOutlet}            from '@angular/router';


import {InstrumentListComponent}            from './instruments-list.component';
import {InstrumentDetailComponent}          from './instrument-detail.component';
import {SidebarService}                     from '../services/SidebarService';

@Component({
    templateUrl: 'views/instruments/instruments.html',
    directives: [RouterOutlet],
    providers: [InstrumentListComponent]
})
export class InstrumentsComponent {
    IsSidebarVisible: boolean;
    mSidebarService: SidebarService;

   /* constructor(private mSidebarService: SidebarService) {
        this.IsSidebarVisible = mSidebarService.IsSidebarVisible;
    }*/
    constructor(){
        console.log("instrument constructor");
    }

    toggleSidebar() {
        if (this.mSidebarService.IsSidebarVisible)
            this.mSidebarService.HideSidebar();
        else
            this.mSidebarService.ShowSidebar();
        this.IsSidebarVisible = this.mSidebarService.IsSidebarVisible;
    }
}