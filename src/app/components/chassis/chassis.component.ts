import {Component}                                      from '@angular/core';
import {Routes, RouterModule}                           from '@angular/router';

import {ChassisListComponent}                           from './chassis-list.component';
import {ChassisDetailComponent}                         from './chassis-detail.component';
import {SidebarService}                                 from '../services/SidebarService';

@Component({
    templateUrl: 'src/views/chassis/chassis.html'
})

export class ChassisComponent {
    IsSidebarVisible: boolean;

    constructor(private mSidebarService: SidebarService) {
        this.IsSidebarVisible = mSidebarService.IsSidebarVisible;
        console.log("chassis constructor");
    }

    toggleSidebar() {
        console.log("chassis");
        if (this.mSidebarService.IsSidebarVisible)
            this.mSidebarService.HideSidebar();
        else
            this.mSidebarService.ShowSidebar();
        this.IsSidebarVisible = this.mSidebarService.IsSidebarVisible;
    }
}