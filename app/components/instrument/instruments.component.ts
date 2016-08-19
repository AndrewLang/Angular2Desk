import {Component}                                      from '@angular/core';
import { RouterOutlet}            from '@angular/router';


import {InstrumentListComponent}            from './instruments-list.component';
import {InstrumentDetailComponent}          from './instrument-detail.component';
import {SidebarService}                     from '../services/SidebarService';

@Component({
    selector: 'instruments',
    templateUrl: '/views/Instruments/',
    directives: [RouterOutlet],
    providers: [InstrumentListComponent]
})
/*@RouteConfig([
    { path: '/', name: 'Instruments', component: InstrumentListComponent, useAsDefault: true },
    { path: '/:id', name: 'InstrumentDetail', component: InstrumentDetailComponent }
])*/
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