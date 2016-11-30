import {Component}                       from '@angular/core';

import {SettingsListComponent}           from './settings-list.component';
import {SettingDetailComponent}          from './setting-detail.component';
import {SidebarService}                  from '../services/SidebarService';

@Component({
    templateUrl: 'src/views/settings/settings.html'
})
export class SettingsComponent {
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