import {Component}                     from '@angular/core';

import {HelpListComponent}             from './help-list.component';
import {SidebarService}                from '../services/SidebarService';

@Component({
    templateUrl: 'src/views/help/help.html'
})

export class HelpComponent {
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