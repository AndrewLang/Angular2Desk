

import {Component}                from '@angular/core';
import { ROUTER_DIRECTIVES}            from '@angular/router';


import {InstrumentListComponent}            from './instruments-list.component';
import {InstrumentDetailComponent}          from './instrument-detail.component';
import {SidebarService}                     from '../services/SidebarService';


@Component({
    templateUrl: 'views/instruments/instruments.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [InstrumentListComponent, SidebarService]
})
export class InstrumentsComponent {
    IsSidebarVisible: boolean;


   constructor(private mSidebarService: SidebarService) {
        this.IsSidebarVisible = mSidebarService.IsSidebarVisible;
    }
    
    toggleSidebar() {
        if (this.mSidebarService.IsSidebarVisible)
            this.mSidebarService.HideSidebar();
        else
            this.mSidebarService.ShowSidebar();
        this.IsSidebarVisible = this.mSidebarService.IsSidebarVisible;
    }
}